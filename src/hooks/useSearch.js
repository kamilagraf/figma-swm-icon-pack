import React, { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';
import { icons } from '../assets/icons';

const SearchContext = React.createContext({});

export const SearchProvider = ({ children }) => {
    const [results, setResults] = useState(icons);
    const [query, setQuery] = useState('');

    const fuse = new Fuse(icons, {
        keys: ['name', 'tags'],
        useExtendedSearch: true,
        threshold: 0.2,
    });

    useEffect(() => {
        query.trim()
            ? setResults(fuse.search(query.trim()).map((value) => value.item))
            : setResults(icons);
    }, [query]);

    return (
        <SearchContext.Provider value={{ query, setQuery, results }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    const search = useContext(SearchContext);

    if (!search) {
        throw Error('useSearch needs to be used inside SearchContext');
    }

    return search;
};
