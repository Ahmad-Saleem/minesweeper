import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer'

const middlewares = [thunk];
const composeEnhancers = composeWithDevTools({
    trace: true,
});
const store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;
