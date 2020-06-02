import React from 'react';
import Link from 'next/link';
import { PostBlock, Title, Body } from './Post.styled';

interface PropsPost {
    post: {
        id: number;
        title: string;
        body: string;
    };
}

const Post = ({ post }: PropsPost): JSX.Element => {
    return (
        <>
            <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                <PostBlock>
                    <Title>{post.title}</Title>
                    <Body>{post.body}</Body>
                </PostBlock>
            </Link>
        </>
    );
};

export default Post;
