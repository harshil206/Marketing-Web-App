import React from 'react';
import reactDom from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore,compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './redux/reducers';
import Navigator from './navigator';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(reducers,composeEnhacers(applyMiddleware(thunk)));

reactDom.render(
    <Provider store={store}>
        <Navigator/>
    </Provider>,
    document.querySelector('#root')
)