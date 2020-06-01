import * as types from './blogTypes';

export const getPostsStart = (): types.GetPostsStartType => ({
    type: types.GET_POSTS_START,
});

export const getPostsSuccess = (posts): types.GetPostsSuccessType => ({
    type: types.GET_POSTS_SUCCESS,
    payload: { posts },
});

export const getPostsError = (error): types.GetPostsErrorType => ({
    type: types.GET_POSTS_ERROR,
    payload: { error },
});

export const getPostStart = (): types.GetPostStartType => ({
    type: types.GET_POST_START,
});

export const getPostSuccess = (post): types.GetPostSuccessType => ({
    type: types.GET_POST_SUCCESS,
    payload: { post },
});

export const getPostError = (error): types.GetPostErrorType => ({
    type: types.GET_POST_ERROR,
    payload: { error },
});

export const createPostStart = (): types.CreatePostStartType => ({
    type: types.CREATE_POST_START,
});

export const createPostSuccess = (post): types.CreatePostSuccessType => ({
    type: types.CREATE_POST_SUCCESS,
    payload: { post },
});

export const createPostError = (error): types.CreatePostErrorType => ({
    type: types.CREATE_POST_ERROR,
    payload: { error },
});
