import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
// import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import rootReducer from './reducers'
import { Spin } from 'antd';
// import App from './components/App'
import App from './super-redux/containers/Root'
import * as serviceWorker from './serviceWorker';

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = createStore(persistedReducer)
let persistor = persistStore(store)

ReactDOM.render(
    // <Provider store={store}>
    //     <PersistGate loading={<Spin></Spin>} persistor={persistor}>
    //         < App />
    //     </PersistGate>
    // </Provider>,
    < App />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();