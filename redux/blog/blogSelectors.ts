import { StoreType, PostType } from './blogTypes';

export const getPosts = (store: StoreType): PostType[] => store.blog.posts;
export const getPost = (store: StoreType): PostType => store.blog.post;
export const getLoader = (store: StoreType): boolean => store.blog.isLoading;
