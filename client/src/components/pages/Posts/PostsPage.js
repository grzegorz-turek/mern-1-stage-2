import React from 'react';
import PostsPages from '../../common/PageTitle/PageTitle'
import Posts from '../../features/Posts/PostsContainer';
import PostsCounter from '../../features/PostsCounter/PostsCounterContainer';

const PostsPage = () => (
    <div>
        <PostsPages>Posts List</PostsPages>
        <Posts />
        <PostsCounter />
    </div>
);

export default PostsPage;