import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import HomePage from './components/pages/Home/HomePage';
import PostsPage from './components/pages/Posts/PostsPage';
import ContactPage from './components/pages/Contact/ContactPage';
import NotFoundPage from './components/pages/NotFound/NotFoundPage';
import AddPostPage from './components/pages/AddPost/AddPostPage';
import SinglePostPage from './components/pages/SinglePost/SinglePostPage';


import './styles/global.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
    render() {
        return (
            <MainLayout>
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/posts' exact component={PostsPage} />
                    <Route path='/posts/new' exact component={AddPostPage} />
                    <Route path='/posts/:id' exact component={SinglePostPage} props={this.props} />
                    <Route path='/contact' exact component={ContactPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </MainLayout>
        )
    }
}

export default App;