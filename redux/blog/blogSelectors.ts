import { StoreType, PostType } from './blogTypes';

export const getPosts = (store: StoreType): PostType[] => store.posts;
export const getPost = (store: StoreType): PostType => store.post;
export const getLoader = (store: StoreType): boolean => store.isLoading;
