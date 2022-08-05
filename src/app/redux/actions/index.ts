// import { ActionType } from '../action-types';

interface showCart {
    // type: ActionType.SHOWCART;
    type: string;
    payload: boolean;
}

export type Action = showCart;
