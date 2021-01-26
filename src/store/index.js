import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';

const initialState = {};

const rootreducer=combineReducers({
    auth: authReducer
})

const middleware = [thunk];

const store=createStore(rootreducer, initialState ,compose(applyMiddleware(...middleware)));


export default store;
