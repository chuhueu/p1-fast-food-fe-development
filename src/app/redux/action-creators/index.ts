import { SHOW_CART, DECREASE, INCREASE } from '../action-types';

function showCart(data: boolean): any {
    return {
        type: SHOW_CART,
        payload: data
    };
}

function decrease(data: number): any {
    return {
        type: DECREASE,
        payload: data
    };
}

function increase(data: number): any {
    return {
        type: INCREASE,
        payload: data
    };
}

export { showCart, decrease, increase };
