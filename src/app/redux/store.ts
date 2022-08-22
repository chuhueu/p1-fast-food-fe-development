import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { createCartReducer, cartItemReducer, getCartReducer, removeCartReducer, updateQtyCartReducer } from './reducers/cartReducer';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer';
import { listProductReducer, detailProductReducer, listFilterProductReducer } from './reducers/productReducer';

const reducers = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    listProduct: listProductReducer,
    detailProduct: detailProductReducer,
    filterProduct: listFilterProductReducer,
    createCart: createCartReducer,
    cartItem: cartItemReducer,
    getCart: getCartReducer,
    removeCart: removeCartReducer,
    updateQty: updateQtyCartReducer
});

const middleware = [thunk];

export const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(...middleware)));
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
