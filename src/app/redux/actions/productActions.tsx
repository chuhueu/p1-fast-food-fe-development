import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../store';
import axios from '../../axios';

import {
    GET_LIST_PRODUCT_FAILURE,
    GET_LIST_PRODUCT_REQUEST,
    GET_LIST_PRODUCT_SUCCESS,
    GET_FILTER_PRODUCT_FAILURE,
    GET_FILTER_PRODUCT_REQUEST,
    GET_FILTER_PRODUCT_SUCCESS,
    GET_DETAIL_PRODUCT_FAILURE,
    GET_DETAIL_PRODUCT_REQUEST,
    GET_DETAIL_PRODUCT_SUCCESS,
    ADD_NEW_PRODUCT_FAILURE,
    ADD_NEW_PRODUCT_REQUEST,
    ADD_NEW_PRODUCT_SUCCESS,
    FILTER_PRODUCT_BY_NAME
} from '../constants/productConstants';

export const getListProduct =
    (): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>, getState: () => RootState): Promise<void> => {
        try {
            dispatch({ type: GET_LIST_PRODUCT_REQUEST });

            // const {
            //   userLogin: { userInfo },
            // } = getState();

            const { data } = await axios.get(`/product`);
            dispatch({
                type: GET_LIST_PRODUCT_SUCCESS,
                payload: data
            });
        } catch (error) {
            dispatch({
                type: GET_LIST_PRODUCT_FAILURE,
                payload: error
            });
        }
    };

export const getFilterProduct =
    ({ category, type, min, max, rating, pageNumber, sortOrder }: any): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>, getState: () => RootState): Promise<void> => {
        try {
            dispatch({ type: GET_FILTER_PRODUCT_REQUEST });

            const { data } = await axios.get(
                `/product/list?category=${category}&type=${type}&min=${min}&max=${max}&rating=${rating}&pageNumber=${pageNumber}&sortOrder=${sortOrder}`
            );
            dispatch({
                type: GET_FILTER_PRODUCT_SUCCESS,
                payload: data
            });
        } catch (error) {
            dispatch({
                type: GET_FILTER_PRODUCT_FAILURE,
                payload: error
            });
        }
    };

export const getDetailProduct =
    (id: string): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>, getState: () => RootState): Promise<void> => {
        try {
            dispatch({ type: GET_DETAIL_PRODUCT_REQUEST });

            // const {
            //   userLogin: { userInfo },
            // } = getState();

            const { data } = await axios.post(`/product/${id}`);
            dispatch({
                type: GET_DETAIL_PRODUCT_SUCCESS,
                payload: data
            });
        } catch (error) {
            dispatch({
                type: GET_DETAIL_PRODUCT_FAILURE,
                payload: error
            });
        }
    };

export const addNewProduct =
    ({ name, slug, image, desc, price, rate, country, category, productType }: any): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>, getState: () => RootState): Promise<void> => {
        try {
            dispatch({ type: ADD_NEW_PRODUCT_REQUEST });

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            // fetch data from Backend
            const { data } = await axios.post(
                '/',
                {
                    name,
                    slug,
                    image,
                    desc,
                    price,
                    rate,
                    country,
                    category,
                    productType
                },
                config
            );
            dispatch({
                type: ADD_NEW_PRODUCT_SUCCESS,
                payload: data
            });
        } catch (error) {
            dispatch({
                type: ADD_NEW_PRODUCT_FAILURE,
                payload: error
            });
        }
    };

export const getFilterProductByname =
    (text: any): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>, getState: () => RootState): Promise<void> => {
        dispatch({
            type: FILTER_PRODUCT_BY_NAME,
            payload: text
        });
    };
