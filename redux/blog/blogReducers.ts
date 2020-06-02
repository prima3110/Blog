import { combineReducers } from 'redux';
import * as types from './blogTypes';

const posts = (state = [], action: types.actionsTypes): types.PostType[] => {
    switch (action.type) {
        case types.GET_POSTS_SUCCESS:
            return action.payload.posts;

        case types.CREATE_POST_SUCCESS:
            return [...state, action.payload.post];

        default:
            return state;
    }
};

const post = (state = null, action: types.actionsTypes): types.PostType => {
    switch (action.type) {
        case types.GET_POST_SUCCESS:
            return action.payload.post;

        default:
            return state;
    }
};

const isError = (state = null, action: types.actionsTypes): {} | null => {
    switch (action.type) {
        case types.GET_POSTS_ERROR:
        case types.GET_POST_ERROR:
        case types.CREATE_POST_ERROR:
            return action.payload.error;

        case types.GET_POSTS_START:
        case types.GET_POST_START:
        case types.CREATE_POST_START:
        case types.GET_POSTS_SUCCESS:
        case types.GET_POST_SUCCESS:
        case types.CREATE_POST_SUCCESS:
            return null;

        default:
            return state;
    }
};

const isLoading = (state = false, action: types.actionsTypes): boolean => {
    switch (action.type) {
        case types.GET_POSTS_START:
        case types.GET_POST_START:
        case types.CREATE_POST_START:
            return true;

        case types.GET_POSTS_SUCCESS:
        case types.GET_POST_SUCCESS:
        case types.CREATE_POST_SUCCESS:
        case types.GET_POSTS_ERROR:
        case types.GET_POST_ERROR:
        case types.CREATE_POST_ERROR:
            return false;

        default:
            return state;
    }
};

export default combineReducers({
    posts,
    post,
    isError,
    isLoading,
});
