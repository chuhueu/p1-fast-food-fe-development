import { ActionTypes } from '../action-types/index';

interface cartState {
    isShowCart: boolean;
}

const initState: cartState = {
    isShowCart: false
};

// Declare the type which you return if don't know, let it be any
// eslint-disable-next-line default-param-last
const cartReducer = (state: cartState = initState, action: ActionTypes): any => {
    switch (action.type) {
        case 'SHOW_CART': {
            return {
                isShowCart: action.payload
            };
        }
        // case 'DECREASE': {
        //     return {
        //         numberItem: action.payload
        //     };
        // }
        // case 'INCREASE': {
        //     return {
        //         numberItem: action.payload
        //     };
        // }
        default:
            return state;
    }
};

export default cartReducer;
