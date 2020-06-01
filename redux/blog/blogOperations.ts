import * as blogActions from './blogActions';
import * as types from './blogTypes';
import * as API from '../../services/api';

export const getPosts = () => (dispatch): void => {
    dispatch(blogActions.getPostsStart());
    API.getPosts()
        .then((res) => dispatch(blogActions.getPostsSuccess(res.data)))
        .catch((err) => dispatch(blogActions.getPostsError(err)));
};

export const getPost = (id: string) => (dispatch): void => {
    dispatch(blogActions.getPostStart());
    API.getPostById(id)
        .then((res) => dispatch(blogActions.getPostSuccess(res.data)))
        .catch((err) => dispatch(blogActions.getPostError(err)));
};

export const createPost = (post: types.PostType) => (dispatch): void => {
    dispatch(blogActions.createPostStart());
    API.createPost(post)
        .then((res) => dispatch(blogActions.createPostSuccess(res.data)))
        .catch((err) => dispatch(blogActions.createPostError(err)));
};
