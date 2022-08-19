import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { cartItemReducer } from './reducers/cartReducer';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer';
import { listProductReducer, detailProductReducer } from './reducers/productReducer';

const reducers = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    listProduct: listProductReducer,
    detailProduct: detailProductReducer,
    cartItem: cartItemReducer
});

const middleware = [thunk];

export const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(...middleware)));
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
