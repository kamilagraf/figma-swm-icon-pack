import styled from 'styled-components';

export const TabEntry = styled.button`
    border-radius: 8px;
    background-color: ${({ isActive }) => (isActive ? '#ebefff' : 'transparent')};
    font-size: 14px;
    color: ${({ isActive }) => (isActive ? '#111' : '#6e7478')};
    border: none;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    padding: 14px;

    &:active,
    &:focus {
        background-color: #ebefff;
        -webkit-box-shadow: none;
        box-shadow: none;
        color: #111;
    }

    &:hover {
        cursor: pointer;
        background-color: #f5f7ff;
    }
`;

export const FooterWrapper = styled.div`
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    width: 100%;
    padding-top: 12px;
`;

export const TabBarWrapper = styled.div``;

export const LinksWrapper = styled.div`
    align-items: center;
    justify-content: center;
    padding: 12px 0 12px 0;
`;

export const StyledLink = styled.button`
    color: #aaa;
    cursor: pointer;
    padding: 0 16px 0 16px;
    text-decoration: none;

    &:hover {
        color: #111;
    }
`;
