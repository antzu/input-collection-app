import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import './css/index.css';
import App from './App';
import registerServiceWorker from './util/registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render((
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
