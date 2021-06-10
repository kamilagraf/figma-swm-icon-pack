import styled from 'styled-components';

export const Input = styled.input`
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid #ebeced;
    outline: none;
    padding: 16px 16px 16px 20px;
    font-size: 14px;
    line-height: 22px;
    width: 100%;
    background-color: #f5f7ff;
`;

export const SearchBarWrapper = styled.div`
    padding: 16px 24px;
    background-color: #fff;
    position: sticky;
    top: 0;

    ${Input}:focus, ${Input}:hover {
        outline: none !important;
        -webkit-box-shadow: none;
        box-shadow: none;
    }
`;
