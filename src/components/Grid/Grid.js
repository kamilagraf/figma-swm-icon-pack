import React from 'react';
// import { icons } from '../../assets/icons';
import { SWMIconProvider } from 'react-swm-icon-pack';
import { GridWrapper, IconWrapper, StyledDiv, StyledParagraph } from './Grid.styles';
import { useSearch } from '../../hooks/useSearch';
import { EmoteSad } from 'react-swm-icon-pack';
import { useSet } from '../../hooks/useSet';

const Grid = () => {
    const { results } = useSearch();
    const { activeSet } = useSet();

    const handleIconInsert = (e, name) => {
        const svg = e.currentTarget.innerHTML;
        parent.postMessage({ pluginMessage: { type: 'insert', payload: { name, svg } } }, '*');
    };

    const handleIconDrag = (e) => {
        e.dataTransfer.effectAllowed = 'copyMove';
        e.dataTransfer.setData('text/plain', e.currentTarget.innerHTML);
    };

    const handleIconDrop = (e, name) => {
        const svg = e.currentTarget.innerHTML;
        if (e.nativeEvent.view.length === 0) return;

        parent.postMessage({ pluginMessage: { type: 'drop', payload: { name, svg } } }, '*');
    };

    if (!results.length)
        return (
            <StyledDiv>
                <EmoteSad size={112} color="#E5E5E5" strokeWidth="1" />
                <StyledParagraph>Nothing found</StyledParagraph>
            </StyledDiv>
        );

    return (
        <GridWrapper>
            <SWMIconProvider
                color="black"
                secondaryColor="gray"
                size="42"
                strokeWidth="1.5"
                set={activeSet.toLowerCase()}
            >
                {results.map((icon) => (
                    <IconWrapper
                        key={icon.name}
                        title={icon.name}
                        draggable
                        onDragStart={handleIconDrag}
                        onDragEnd={(e) => handleIconDrop(e, icon.name)}
                        onClick={(e) => handleIconInsert(e, icon.name)}
                    >
                        <icon.Icon key={icon.name} />
                    </IconWrapper>
                ))}
            </SWMIconProvider>
        </GridWrapper>
    );
};

export default Grid;
