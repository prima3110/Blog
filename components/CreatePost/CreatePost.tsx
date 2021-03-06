import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as blogOperations from '../../redux/blog/blogOperations';
import * as types from '../../redux/blog/blogTypes';
import { Form, Textarea, Input, Button } from './CreatePost.styled';

interface MSTP {
    addPost: (post) => void;
}

const CreatePost = ({ addPost }: MSTP): JSX.Element => {
    const [input, setInput] = useState('');
    const [textarea, setTextarea] = useState('');

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInput(e.target.value);
    };

    const onChangeTextarea = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTextarea(e.target.value);
    };

    const reset = (): void => {
        setInput('');
        setTextarea('');
    };

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (input && textarea) {
            const newPost = {
                title: input,
                body: textarea,
            };
            addPost(newPost);
            reset();
            alert('Your post successfully added!');
        }
    };

    return (
        <>
            <Form onSubmit={onSubmitForm}>
                <Input placeholder="Enter your title here" value={input} onChange={onChangeInput} required />
                <Textarea
                    rows="20"
                    cols="20"
                    name="text"
                    placeholder="Enter your body here"
                    value={textarea}
                    onChange={onChangeTextarea}
                    required
                ></Textarea>
                <Button type="submit">Add New Post</Button>
            </Form>
        </>
    );
};

const mapDispatchToProps = (dispatch: (any) => void): MSTP => ({
    addPost: (post: types.PostType): void => dispatch(blogOperations.createPost(post)),
});

export default connect(null, mapDispatchToProps)(CreatePost);
