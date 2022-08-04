function showCart(data: boolean): object {
    return {
        type: 'cart/isShowCart',
        payload: data
    };
}

export default showCart;
