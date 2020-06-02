import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Posts from '../components/PostsList/PostsList';
import * as blogSelectors from '../redux/blog/blogSelectors';
import * as blogOperations from '../redux/blog/blogOperations';

const App = ({ posts, getPosts, isLoading }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);
    return <>{posts && <Posts posts={posts} />}</>;
};

const mapStateToProps = (store) => ({
    posts: blogSelectors.getPosts(store),
});

const mapDispatchToProps = (dispatch) => ({
    getPosts: (): void => dispatch(blogOperations.getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
