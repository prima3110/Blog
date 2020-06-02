// import React from 'react';
// import { Provider } from 'react-redux';
// import withRedux from 'next-redux-wrapper';
// import store from '../redux/store';
// import Navigation from '../components/Navigation/Navigation';

// const MyApp = (props: any): any => {
//     const { Component, pageProps } = props;
//     return (
//         <Provider store={store}>
//             <Navigation />
//             <Component {...pageProps} />
//         </Provider>
//     );
// };

// //makeStore function that returns a new store for every request
// const makeStore = () => store;

// //withRedux wrapper that passes the store to the App Component
// export default withRedux(makeStore)(MyApp);

import App from 'next/app';
import { Provider } from 'react-redux';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import store from '../redux/store';
import Navigation from '../components/Navigation/Navigation';
// console.log(store);
class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        return { pageProps: pageProps };
    }

    render(): JSX.Element {
        const { Component, pageProps } = this.props as any;
        // console.log(this.props);
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
