import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { showCartReducer } from './reducers/cartReducer';

const reducers = combineReducers({
    showCart: showCartReducer
});

const middleware = [thunk];

export const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(...middleware)));
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
