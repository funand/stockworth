import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import chartReducer from '../reducers/chart';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/*
    This function is responsible for combining all of the reducers into a single Redux store
*/


export default () => {
    const store = createStore(
        combineReducers({
            chart: chartReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};

