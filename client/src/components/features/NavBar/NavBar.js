import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    render() {
        return (
            <div>
                <Link to='/'>Home Page</Link>
                <Link to='/posts'>Posts Page</Link>
                <Link to='/posts/new'>Add Post</Link>
                <Link to='/contact'>Contact Page</Link>
            </div>
        );
    }
}

export default NavBar;