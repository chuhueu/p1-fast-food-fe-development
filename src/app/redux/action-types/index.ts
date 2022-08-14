export const SHOW_CART = 'SHOW_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const DECREASE = 'DECREASE';
export const INCREASE = 'INCREASE';

export type ActionTypes =
    | {
          type: typeof SHOW_CART;
          payload: boolean;
      }
    | {
          type: typeof ADD_TO_CART;
      }
    | {
          type: typeof DECREASE;
          payload: number;
      }
    | {
          type: typeof INCREASE;
          payload: number;
      };
