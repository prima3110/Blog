import styled from 'styled-components';

export const Form = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

export const Input = styled.input`
    cursor: pointer;
    font-weight: bold;
    border: 2px solid black;
    background: mintcream;
    padding: 10px;
    margin: 20px 0;
    box-shadow: 10px 10px 10px 0px black;
`;

export const Textarea = styled.textarea`
    cursor: pointer;
    font-weight: bold;
    border: 2px solid black;
    background: lightgoldenrodyellow;
    padding: 10px;
    margin-bottom: 20px;
    box-shadow: 10px 10px 10px 0px black;
`;

export const Button = styled.button`
    cursor: pointer;
    border: 1px solid black;
    font-weight: bold;
    font-size: 20px;
    margin: 0 auto;
    width: 200px;
    height: 40px;
    color: green;
    box-shadow: 10px 10px 10px 0px gray;
`;
