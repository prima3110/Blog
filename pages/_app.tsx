import App from 'next/app';
import { Provider } from 'react-redux';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import store from '../redux/store';
import Navigation from '../components/Navigation/Navigation';
class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        return { pageProps: pageProps };
    }

    render(): JSX.Element {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { Component, pageProps } = this.props as any;
        return (
            <Provider store={store}>
                <Navigation />
                <Component {...pageProps} />
            </Provider>
        );
    }
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
