import React from 'react';
import Spinner from 'react-loader-spinner';
import LoaderStyles from './Loader.styled';

const Loader = (): JSX.Element => {
    return (
        <LoaderStyles>
            <Spinner type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} />;
        </LoaderStyles>
    );
};

export default Loader;
