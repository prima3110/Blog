import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import Post from '../../components/Post/Post';
import * as blogSelectors from '../../redux/blog/blogSelectors';
import * as blogOperations from '../../redux/blog/blogOperations';
import * as types from '../../redux/blog/blogTypes';
import Loader from '../..//components/Loader/Loader';

interface MDTP {
    getPost: (id: number) => void;
}

interface MSTP {
    postById: types.PostType;
    isLoading: boolean;
}

interface PostPageProps {
    postById: types.PostType;
    getPost: (id: number) => void;
    isLoading: boolean;
}

const PostPage = ({ postById, getPost, isLoading }: PostPageProps): JSX.Element => {
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        getPost(+id);
    }, [getPost, id]);

    return (
        <>
            {isLoading && <Loader />}
            {postById && <Post post={postById} />}
        </>
    );
};

const mapStateToProps = (store: types.StoreType): MSTP => ({
    postById: blogSelectors.getPost(store),
    isLoading: blogSelectors.getLoader(store),
});

const mapDispatchToProps = (dispatch: (any) => void): MDTP => ({
    getPost: (id: number): void => dispatch(blogOperations.getPost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
