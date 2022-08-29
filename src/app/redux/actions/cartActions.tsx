import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
    CREATE_CART_REQUEST,
    CREATE_CART_SUCCESS,
    CREATE_CART_FAILURE,
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_FAILURE,
    ADD_TO_CART_SUCCESS,
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    GET_CART_FAILURE,
    REMOVE_TO_CART_REQUEST,
    REMOVE_TO_CART_SUCCESS,
    REMOVE_TO_CART_FAILURE,
    UPDATE_QUANTITY_REQUEST,
    UPDATE_QUANTITY_FAILURE,
    UPDATE_QUANTITY_SUCCESS
} from '../constants/cartConstants';
import { AnyAction } from 'redux';
import { RootState } from '../store';
import axios from '../../axios';

export const createCart =
    (userId: any): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>, getState: () => RootState): Promise<void> => {
        try {
            dispatch({ type: CREATE_CART_REQUEST });
            const { data } = await axios.post('/cart', {
                user: userId
            });

            dispatch({
                type: CREATE_CART_SUCCESS,
                payload: data
            });
        } catch (error) {
            dispatch({
                type: CREATE_CART_FAILURE,
                payload: error
            });
        }
    };

export const addToCart =
    (product: any, name: any, image: any, price: any, quantity: number): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>, getState: () => RootState): Promise<void> => {
        try {
            dispatch({ type: ADD_TO_CART_REQUEST });

            // const {
            //   userLogin: { userInfo },
            // } = getState();

            const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')!) : null;
            const cartId = await axios.get(`/cart/user/${userInfo?._id}`);
            const { data } = await axios.post(`/cart/add/${cartId.data?._id}`, {
                product,
                name,
                image,
                price,
                quantity
            });

            dispatch({
                type: ADD_TO_CART_SUCCESS,
                payload: data
            });
        } catch (error) {
            dispatch({
                type: ADD_TO_CART_FAILURE,
                payload: error
            });
        }
    };

export const getCart =
    (): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>, getState: () => RootState): Promise<void> => {
        try {
            dispatch({ type: GET_CART_REQUEST });

            // const {
            //   userLogin: { userInfo },
            // } = getState();

            const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')!) : null;
            const cartId = await axios.get(`/cart/user/${userInfo._id}`);
            const { data } = await axios.get(`/cart/${cartId.data?._id}`);

            dispatch({
                type: GET_CART_SUCCESS,
                payload: data
            });

            //localStorage.setItem("cartInfo", JSON.stringify(data));
        } catch (error) {
            dispatch({
                type: GET_CART_FAILURE,
                payload: error
            });
        }
    };

export const removeCartItem =
    (itemID: any): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>, getState: () => RootState): Promise<void> => {
        try {
            dispatch({ type: REMOVE_TO_CART_REQUEST });
            const { data } = await axios.delete(`/cart/delete/${itemID}`);
            dispatch({
                type: REMOVE_TO_CART_SUCCESS,
                payload: data
            });
        } catch (error) {
            dispatch({
                type: REMOVE_TO_CART_FAILURE,
                payload: error
            });
        }
    };

export const updateQtyCartItem =
    (itemID: string, quantity: number): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>, getState: () => RootState): Promise<void> => {
        try {
            dispatch({ type: UPDATE_QUANTITY_REQUEST });

            const { data } = await axios.put(`/cart/update/${itemID}`, {
                quantity
            });
            dispatch({
                type: UPDATE_QUANTITY_SUCCESS,
                payload: data
            });
        } catch (error) {
            dispatch({
                type: UPDATE_QUANTITY_FAILURE,
                payload: error
            });
        }
    };
