import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../store';
import axios from '../../axios';

import { GET_LIST_PRODUCT_FAILURE, GET_LIST_PRODUCT_REQUEST, GET_LIST_PRODUCT_SUCCESS } from '../constants/productConstants';

export const getListProduct =
    (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
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
