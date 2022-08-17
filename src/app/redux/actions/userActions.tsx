import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../store';
import axios from '../../axios';

import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILED,
    USER_LOGOUT
} from '../constants/userConstants';

export const login =
    (email: string, password: string): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: USER_LOGIN_REQUEST
            });
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            //fetch data from backend (userInfo). interact with the backend using axios
            const { data } = await axios.post('/auth/login', { email, password }, config);
            //pass this data to the reducer in the payload of the dispatch
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data
            });
            localStorage.setItem('userInfo', JSON.stringify(data));
        } catch (error) {
            //USER LOGIN FAIL
            dispatch({
                type: USER_LOGIN_FAILED,
                payload: error
            });
        }
    };

export const registerUser =
    (username: string, email: string, password: string): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: USER_REGISTER_REQUEST
            });

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            // fetch data from Backend
            const { data } = await axios.post(
                '/auth/register',
                {
                    username,
                    email,
                    password
                },
                config
            );

            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: data
            });
            localStorage.setItem('userInfo', JSON.stringify(data));
        } catch (e) {
            dispatch({
                type: USER_REGISTER_FAILED,
                payload: e
            });
        }
    };

export const logout =
    (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        dispatch({
            type: USER_LOGOUT
        });
        localStorage.removeItem('userInfo');
    };
