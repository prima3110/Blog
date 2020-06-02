import React from 'react';
import Link from 'next/link';
import * as types from '../../redux/blog/blogTypes';
import { Wrapper, List, PostBlock, Title, Body } from './PostsList.styled';

interface PostsArray {
    posts: types.PostType[];
}

const Posts = ({ posts = [] }: PostsArray): JSX.Element => {
    return (
        <>
            <Wrapper>
                <List>
                    {posts.map((post: types.PostType) => (
                        <Link href="/posts/[id]" as={`/posts/${post.id}`} key={post.id}>
                            <PostBlock>
                                <Title>{post.title}</Title>
                                <Body>{post.body}</Body>
                            </PostBlock>
                        </Link>
                    ))}
                </List>
            </Wrapper>
        </>
    );
};

export default Posts;
