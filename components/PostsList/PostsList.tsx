import React from 'react';
import Post from '../Post/Post';
import * as types from '../../redux/blog/blogTypes';
import { Wrapper, List } from './PostsList.styled';

interface PostsArray {
    posts: types.PostType[];
}

const Posts = ({ posts = [] }: PostsArray): JSX.Element => {
    return (
        <>
            <Wrapper>
                <List>
                    {posts.map((post: types.PostType) => (
                        <Post key={post.id} post={post} />
                    ))}
                </List>
            </Wrapper>
        </>
    );
};

export default Posts;
