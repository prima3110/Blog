import React from 'react';
import { PostBlock, Title, Body } from './Post.styled';
import * as types from '../../redux/blog/blogTypes';

interface PropsPost {
    post: types.PostType;
}

const Post = ({ post }: PropsPost): JSX.Element => {
    return (
        <>
            <PostBlock>
                <Title>{post.title}</Title>
                <Body>{post.body}</Body>
                {post.comments && post.comments.length > 0 && <h3>Comments: </h3>}
                {post.comments && post.comments.length > 0 ? (
                    (post.comments as Array<types.CommentType>).map((el) => (
                        <p key={el.id}>
                            <span>{el.id}: </span> {el.body}
                        </p>
                    ))
                ) : (
                    <h3>No comments for this post</h3>
                )}
            </PostBlock>
        </>
    );
};

export default Post;
