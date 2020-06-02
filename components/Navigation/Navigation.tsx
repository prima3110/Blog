import React from 'react';
import Link from 'next/link';
import { Wrapper, Logo, NavList, NavListItem } from './Navigation.styled';

const Navigation = (): JSX.Element => {
    return (
        <Wrapper>
            <Logo>Blog</Logo>
            <NavList>
                <Link href="/">
                    <NavListItem>Latest Posts</NavListItem>
                </Link>
                <Link href="/Posts/new">
                    <NavListItem>Create post</NavListItem>
                </Link>
            </NavList>
        </Wrapper>
    );
};

export default Navigation;
