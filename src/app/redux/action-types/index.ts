export const SHOW_CART = 'SHOW_CART';
export const ADD_TO_CART = 'ADD_TO_CART';

export type ActionTypes =
    | {
          type: typeof SHOW_CART;
          payload: boolean;
      }
    | {
          type: typeof ADD_TO_CART;
      };
