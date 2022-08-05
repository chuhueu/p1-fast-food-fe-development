interface cartState {
    isShowCart: boolean;
}

const initState: cartState = {
    isShowCart: false
};

type Action = { type: 'SHOW_CART'; payload: boolean };

// Declare the type which you return if don't know, let it be any
// eslint-disable-next-line default-param-last
const cartReducer = (state: cartState = initState, action: Action): any => {
    switch (action.type) {
        case 'SHOW_CART': {
            return {
                ...state,
                state: action.payload
            };
        }
        default:
            return state;
    }
};

export default cartReducer;
