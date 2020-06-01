import axios from 'axios';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red/';

export const getPosts = (): Promise<{}> => axios.get('posts');

export const getPostById = (id): Promise<{}> => axios.get(`posts/${id}?_embed=comments`);

export const createPost = (post): Promise<{}> => axios.post('posts', post);
