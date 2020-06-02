import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Posts from '../components/PostsList/PostsList';
import * as blogSelectors from '../redux/blog/blogSelectors';
import * as blogOperations from '../redux/blog/blogOperations';
import * as types from '../redux/blog/blogTypes';
import Loader from '../components/Loader/Loader';

interface Posts {
    posts: types.PostType[];
    isLoading: boolean;
}
interface GetPosts {
    getPosts: () => void;
}

interface Props {
    posts: types.PostType[];
    isLoading: boolean;
    getPosts: () => void;
}

const App = ({ posts, getPosts, isLoading }: Props): JSX.Element => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);
    return (
        <>
            {isLoading && <Loader />}
            {posts && <Posts posts={posts} />}
        </>
    );
};

const mapStateToProps = (store: types.StoreType): Posts => ({
    posts: blogSelectors.getPosts(store),
    isLoading: blogSelectors.getLoader(store),
});

const mapDispatchToProps = (dispatch: (any) => void): GetPosts => ({
    getPosts: (): void => dispatch(blogOperations.getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
