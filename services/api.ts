import axios from 'axios';
import * as types from '../redux/blog/blogTypes';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red/';

export const getPosts = (): Promise<{}> => axios.get('posts');

export const getPostById = (id: number): Promise<{}> => axios.get(`posts/${id}?_embed=comments`);

export const createPost = (post: types.PostType): Promise<{}> => axios.post('posts', post);
