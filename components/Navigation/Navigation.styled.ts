import styled from 'styled-components';

export const Logo = styled.h1`
    font-size: 40px;
    text-align: center;
    padding-top: 20px;
    margin-bottom: 0;
`;

export const Wrapper = styled.header`
    background: lightgrey;
`;

export const NavList = styled.ul`
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding-bottom: 20px;
    color: blue;
    font-size: 30px;
`;

export const NavListItem = styled.li`
    cursor: pointer;
    :hover {
        text-decoration: underline;
    }
`;
