import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { SHOW_CART } from '../constants/cartConstants';
import { AnyAction } from 'redux';
import { RootState } from '../store';

export const showCart = (data: boolean) => {
    return {
        type: SHOW_CART,
        payload: data
    };
};
