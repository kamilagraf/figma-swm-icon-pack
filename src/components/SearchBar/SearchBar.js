import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchBarWrapper, Input } from './SearchBar.styles';
import { useSearch } from '../../hooks/useSearch';

const SearchBar = () => {
    const { query, setQuery } = useSearch();

    return (
        <SearchBarWrapper>
            <Input
                type="text"
                placeholder="Search icons..."
                value={query}
                onChange={({ currentTarget }) => setQuery(currentTarget.value)}
            />
        </SearchBarWrapper>
    );
};

SearchBar.propTypes = {};

export default SearchBar;
