import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
// pages
import Home from './Home.jsx';
import NotFound from './NotFound.jsx';

const App =  ( ) => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={ Home }/>
                    <Route   component={ NotFound } />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;