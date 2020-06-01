export const GET_POSTS_START = 'GET_POSTS_START';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

export const GET_POST_START = 'GET_POST_START';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_ERROR = 'GET_POST_ERROR';

export const CREATE_POST_START = 'CREATE_POST_START';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_ERROR = 'CREATE_POST_ERROR';

// general interfaces

export interface CommentType {
    postId: number;
    body: string;
    id: number;
}

export interface PostType {
    id: number;
    title: string;
    body: string;
    comments?: CommentType[] | [];
}

export interface StoreType {
    posts: PostType[] | [];
    post: PostType | null;
    isError: Record<string, unknown> | null;
    isLoading: boolean;
}

// actions interfaces
export interface GetPostsStartType {
    type: typeof GET_POSTS_START;
}

export interface GetPostsSuccessType {
    type: typeof GET_POSTS_SUCCESS;
    payload: {
        posts: PostType[];
    };
}

export interface GetPostsErrorType {
    type: typeof GET_POSTS_ERROR;
    payload: {
        error: Record<string, unknown>;
    };
}

export interface GetPostStartType {
    type: typeof GET_POST_START;
}

export interface GetPostSuccessType {
    type: typeof GET_POST_SUCCESS;
    payload: {
        post: PostType;
    };
}

export interface GetPostErrorType {
    type: typeof GET_POST_ERROR;
    payload: {
        error: Record<string, unknown>;
    };
}

export interface CreatePostStartType {
    type: typeof CREATE_POST_START;
}

export interface CreatePostSuccessType {
    type: typeof CREATE_POST_SUCCESS;
    payload: {
        post: PostType;
    };
}

export interface CreatePostErrorType {
    type: typeof CREATE_POST_ERROR;
    payload: {
        error: Record<string, unknown>;
    };
}

export type actionsTypes =
    | GetPostsStartType
    | GetPostsSuccessType
    | GetPostsErrorType
    | GetPostStartType
    | GetPostSuccessType
    | GetPostErrorType
    | CreatePostStartType
    | CreatePostSuccessType
    | CreatePostErrorType;
