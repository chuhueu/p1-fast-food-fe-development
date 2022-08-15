import { AnyAction } from 'redux';

export interface cartState {
    isShowCart: boolean;
}

const initState: cartState = {
    isShowCart: false
};

// Declare the type which you return if don't know, let it be any
// eslint-disable-next-line default-param-last
export const showCartReducer = (state: cartState = initState, action: AnyAction): any => {
    switch (action.type) {
        case 'SHOW_CART': {
            return {
                isShowCart: action.payload
            };
        }
        default:
            return state;
    }
};
