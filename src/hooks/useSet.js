import React, { useState, useContext } from 'react';

export const sets = ['Outline', 'Broken', 'Duotone', 'Curved'];

const SetContext = React.createContext({});

export const SetProvider = ({ children }) => {
    const [activeSet, setActiveSet] = useState(sets[0]);

    return (
        <SetContext.Provider value={{ activeSet, setActiveSet }}>{children}</SetContext.Provider>
    );
};

export const useSet = () => {
    const iconSet = useContext(SetContext);

    if (!iconSet) {
        throw Error('useSet needs to be used inside SetContext');
    }

    return iconSet;
};
