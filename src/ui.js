import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './ui.css';
import SearchBar from './components/SearchBar/SearchBar';
import Grid from './components/Grid/Grid';
import Footer from './components/Footer/Footer';
import { SearchProvider } from './hooks/useSearch';
import { SetProvider } from './hooks/useSet';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const App = () => {
    return (
        <Wrapper>
            <SetProvider>
                <SearchProvider>
                    <SearchBar />
                    <Grid />
                    <Footer />
                </SearchProvider>
            </SetProvider>
        </Wrapper>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
