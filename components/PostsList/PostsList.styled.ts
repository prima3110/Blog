import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: orange;
    padding: 20px 0;
`;

export const List = styled.ul`
    margin: 0;
    padding: 0 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
`;

export const PostBlock = styled.li`
    cursor: pointer;
    list-style: none;
    background: #ddd;
    margin: 30px auto;
    padding: 35px 25px;
    width: 25%;
    height: 200px;
    overflow-y: scroll;
    box-shadow: 10px 10px 10px 0px black;
    opacity: 0.7;
    transition: 0.4s;
    :hover {
        transform: scale(1.2);
        transition: 0.4s;
        opacity: 1;
        background-color: #3e8e41;
    }
`;

export const Title = styled.p`
    color: black;
    font-size: 30px;
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
`;

export const Body = styled.p`
    color: navy;
    font-size: 20px;
`;
