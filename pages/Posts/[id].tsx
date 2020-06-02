import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import Post from '../../components/Post/Post';
import * as blogSelectors from '../../redux/blog/blogSelectors';
import * as blogOperations from '../../redux/blog/blogOperations';
import * as types from '../../redux/blog/blogTypes';

interface MDTP {
    getPost: (id: string) => void;
}

interface MSTP {
    postById: types.PostType;
}

interface PostPageProps {
    postById: types.PostType;
    getPost: (id: string | string[]) => void;
}

const PostPage = ({ postById, getPost }: PostPageProps): JSX.Element => {
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        getPost(id);
    }, [getPost, id]);

    return <>{postById && <Post post={postById} />}</>;
};

const mapStateToProps = (store: types.StoreType): MSTP => ({
    postById: blogSelectors.getPost(store),
});

const mapDispatchToProps = (dispatch: (any) => void): MDTP => ({
    getPost: (id: string): void => dispatch(blogOperations.getPost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
