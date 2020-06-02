import axios from 'axios';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red/';

export const getPosts = () => axios.get('posts');

export const getPostById = (id) => axios.get(`posts/${id}?_embed=comments`);

export const createPost = (post) => axios.post('posts', post);
