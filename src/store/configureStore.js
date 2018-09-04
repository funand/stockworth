import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState= {symbol: "K"};
const middleware = {thunk};

// Store Creation

export default () => {
    const store = createStore(combineReducers({reducer}), composeEnhancers(applyMiddleware(...middleware)));

    return store;
};

