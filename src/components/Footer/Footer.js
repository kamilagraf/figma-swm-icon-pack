import React from 'react';
import { FooterWrapper, TabEntry, TabBarWrapper, LinksWrapper, StyledLink } from './Footer.styles';
import { sets } from '../../hooks/useSet';
import { useSet } from '../../hooks/useSet';

const Footer = () => {
    const { activeSet, setActiveSet } = useSet();

    return (
        <FooterWrapper>
            <TabBarWrapper>
                {sets.length > 0
                    ? sets.map((set) => (
                          <TabEntry
                              key={set}
                              isActive={set === activeSet ? true : false}
                              onClick={() => setActiveSet(set)}
                          >
                              {set}
                          </TabEntry>
                      ))
                    : null}
            </TabBarWrapper>
            <LinksWrapper>
                <StyledLink
                    as="a"
                    href="https://www.npmjs.com/package/react-swm-icon-pack"
                    target="_blank"
                    rel="noopener"
                >
                    npm package{' '}
                </StyledLink>
                <StyledLink as="a" href="https://swmansion.com" target="_blank" rel="noopener">
                    swmansion{' '}
                </StyledLink>
                <StyledLink
                    as="a"
                    href="https://dribbble.com/softwaremansion"
                    target="_blank"
                    rel="noopener"
                >
                    dribbble{' '}
                </StyledLink>
            </LinksWrapper>
        </FooterWrapper>
    );
};

export default Footer;
