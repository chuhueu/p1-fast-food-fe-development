import { SHOW_CART } from '../action-types';

function showCart(data: boolean): any {
    return {
        type: SHOW_CART,
        payload: data
    };
}

export default showCart;
