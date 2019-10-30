import React from 'react';

const SinglePostPage = props => (
    <div>
        <h1>Single Post Page</h1>
        <p>Dynamic Endpoint: {props.match.params.id}</p>
    </div>
);

export default SinglePostPage;