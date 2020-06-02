import React from 'react';
import { connect } from 'react-redux';
import CreatePost from '../../components/CreatePost/CreatePost';
import * as blogSelectors from '../../redux/blog/blogSelectors';
import * as types from '../../redux/blog/blogTypes';
import Loader from '../../components/Loader/Loader';

interface Props {
    isLoading: boolean;
}

const AddPost = ({ isLoading }: Props): JSX.Element => {
    return (
        <>
            {isLoading && <Loader />}
            {<CreatePost />}
        </>
    );
};

const mapStateToProps = (store: types.StoreType): Props => ({
    isLoading: blogSelectors.getLoader(store),
});

export default connect(mapStateToProps)(AddPost);
