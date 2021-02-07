import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LoginForm from './components/LoginForm'
import Index from './components/Index'
import * as serviceWorker from './serviceWorker';

const store = configureStore({
    reducer: rootReducer
})

const { Content } = Layout;
ReactDOM.render(
    <Provider store={store}>
        <Layout>
            <Header></Header>
            <Content>
                <Router>
                    <Switch>
                        <Route path='/' exact component={LoginForm}></Route>
                        <Route path='/index' component={Index}></Route>
                    </Switch>
                </Router>
            </Content>
            <Footer></Footer>
        </Layout>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();