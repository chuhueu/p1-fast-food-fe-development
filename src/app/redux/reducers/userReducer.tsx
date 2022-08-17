import { AnyAction } from 'redux';

import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILED
} from '../constants/userConstants';

export interface userInfo {
    _id?: string;
    username?: string;
    email?: string;
    password?: string;
    avatar?: string;
    role?: string;
    googleID?: string;
}

export interface userState {
    userInfo?: userInfo | null;
    isFetching?: boolean;
    error?: boolean;
}

export const userLoginReducer = (state: userState, action: AnyAction) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                isFetching: true,
                error: false
            };
        case USER_LOGIN_SUCCESS:
            return {
                userInfo: action.payload,
                isFetching: false,
                error: false
            };
        case USER_LOGIN_FAILED:
            return {
                isFetching: false,
                error: true
            };
        case USER_LOGOUT: {
            return {
                userInfo: null,
                isFetching: false,
                error: false
            };
        }
        default:
            return { ...state };
    }
};

export const userRegisterReducer = (state: userState, action: AnyAction) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {
                isFetching: true,
                error: false
            };
        case USER_REGISTER_SUCCESS:
            return {
                userInfo: action.payload,
                isFetching: false,
                error: false
            };
        case USER_REGISTER_FAILED:
            return {
                isFetching: false,
                error: true
            };
        case USER_LOGOUT: {
            return {
                userInfo: null,
                isFetching: false,
                error: false
            };
        }
        default:
            return { ...state };
    }
};
