import * as blogActions from './blogActions';
import * as types from './blogTypes';
import * as API from '../../services/api';

export const getPosts = () => (dispatch: (any) => void): void => {
    dispatch(blogActions.getPostsStart());
    API.getPosts()
        .then((res: { data: types.PostType[] }) => dispatch(blogActions.getPostsSuccess(res.data)))
        .catch((err) => dispatch(blogActions.getPostsError(err)));
};

export const getPost = (id: number) => (dispatch: (any) => void): void => {
    dispatch(blogActions.getPostStart());
    API.getPostById(id)
        .then((res: { data: types.PostType }) => dispatch(blogActions.getPostSuccess(res.data)))
        .catch((err) => dispatch(blogActions.getPostError(err)));
};

export const createPost = (post: types.PostType) => (dispatch: (any) => void): void => {
    dispatch(blogActions.createPostStart());
    API.createPost(post)
        .then((res: { data: types.PostType }) => dispatch(blogActions.createPostSuccess(res.data)))
        .catch((err) => dispatch(blogActions.createPostError(err)));
};
