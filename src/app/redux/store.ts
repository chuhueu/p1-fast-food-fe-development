import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { createCartReducer, cartItemReducer, getCartReducer, removeCartReducer, updateQtyCartReducer } from './reducers/cartReducer';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer';
import { listProductReducer, detailProductReducer, listFilterProductReducer, filterProductBynameReducer } from './reducers/productReducer';
import { listCategoryReducer } from './reducers/categoryReducer';

const reducers = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    listProduct: listProductReducer,
    detailProduct: detailProductReducer,
    filterProduct: listFilterProductReducer,
    filterProductByName: filterProductBynameReducer,
    createCart: createCartReducer,
    cartItem: cartItemReducer,
    getCart: getCartReducer,
    removeCart: removeCartReducer,
    updateQty: updateQtyCartReducer,
    listCategory: listCategoryReducer
});

// eslint-disable-next-line no-undef, @typescript-eslint/no-non-null-assertion
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')!) : null;

const initialState = {
    userLogin: {
        userInfo: userInfoFromStorage
    }
    // eslint-disable-next-line @typescript-eslint/ban-types
} as {};

const middleware = [thunk];

export const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
