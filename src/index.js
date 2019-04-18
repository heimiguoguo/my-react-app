import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// import App from './ref/index';
// import App from './reactstrap/customer/index';
// import App from './react-router/components/example';
// import App from './ReactEchartsDemo/ReactEchartsDemo2';

import todoApp from './redux1/reducers'
import App from './redux1/components/App'
import * as serviceWorker from './serviceWorker';

let store = createStore(todoApp)

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
