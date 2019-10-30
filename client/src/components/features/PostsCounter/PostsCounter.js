import React from 'react';
import { PropTypes } from 'prop-types';

class PostsCounter extends React.Component {

    render() {
        const { posts } = this.props;
        return (
            <div>
                {`${posts > 0}` ? `Posts number: ${posts}` : `- no posts -`}
            </div>
        )

        /*
        const { posts } = this.props;
        if (posts) {
            return (
                <div>
                    Posts number: { posts }) 
                </div>
            )
        }
        return (
            <div>
                - no posts -
            </div>)
        */
    }

    /*
    componentDidMount() {
        console.log('PostsCounter: ', this.posts);
    }
    */
};


PostsCounter.propTypes = {
    posts: PropTypes.number,
};

export default PostsCounter;
