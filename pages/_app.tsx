import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import initialStore from '../redux/store';

const MyApp = (props: any): any => {
    const { Component, pageProps, store } = props;

    return <Provider store={store}>{/* <Component {...pageProps} /> */}</Provider>;
};

//makeStore function that returns a new store for every request
const makeStore = () => initialStore;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);
