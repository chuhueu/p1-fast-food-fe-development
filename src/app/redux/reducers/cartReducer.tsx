import {
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_FAILURE,
    ADD_TO_CART_SUCCESS,
    REMOVE_TO_CART_REQUEST,
    REMOVE_TO_CART_SUCCESS,
    REMOVE_TO_CART_FAILURE,
    UPDATE_QUANTITY_REQUEST,
    UPDATE_QUANTITY_FAILURE,
    UPDATE_QUANTITY_SUCCESS
} from '../constants/cartConstants';
import { AnyAction } from 'redux';

export interface cartInfo {
    _id?: string;
    cart?: string;
    product?: string;
    name?: string;
    image?: string;
    price?: number;
    discount?: number;
    quantity?: number;
}

export interface cartState {
    cartInfo: Array<cartInfo>;
    isFetching?: boolean;
    error?: boolean;
}

export interface cart {
    userId?: string;
    isFetching?: boolean;
    error?: boolean;
}

export const cartItemReducer = (state: cartState, action: AnyAction) => {
    switch (action.type) {
        case ADD_TO_CART_REQUEST:
            return {
                isFetching: true,
                error: false
            };
        case ADD_TO_CART_SUCCESS:
            return {
                cartItemInfo: action.payload,
                isFetching: false,
                error: false
            };
        case ADD_TO_CART_FAILURE:
            return {
                isFetching: false,
                error: true
            };
        default:
            return { ...state };
    }
};

export const removeCartReducer = (state: cartState, action: AnyAction) => {
    switch (action.type) {
        case REMOVE_TO_CART_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: false
            };
        case REMOVE_TO_CART_SUCCESS:
            return {
                cartInfo: state.cartInfo?.filter((cart) => cart._id !== action.payload.id),
                isFetching: false,
                error: false
            };
        case REMOVE_TO_CART_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            };
        default:
            return { ...state };
    }
};

export const updateQtyCartReducer = (state: cartState, action: AnyAction) => {
    switch (action.type) {
        case UPDATE_QUANTITY_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: false
            };
        case UPDATE_QUANTITY_SUCCESS:
            return {
                cartInfo: action.payload,
                isFetching: false,
                error: false
            };
        case UPDATE_QUANTITY_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            };
        default:
            return { ...state };
    }
};
