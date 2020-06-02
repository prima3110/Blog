import styled from 'styled-components';

const LoaderStyles = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 101;
    background-color: rgba(255, 107, 8, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default LoaderStyles;
