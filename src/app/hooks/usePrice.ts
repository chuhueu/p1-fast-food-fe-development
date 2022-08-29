import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { cartState } from '../redux/reducers/cartReducer';
import { RootState } from '../redux/store';

const useTotalPrice = (): number => {
    const [totalPrice, setTotalPrice] = useState(0);
    // eslint-disable-next-line arrow-parens
    const getCartData = useSelector<RootState, cartState>((state) => state.getCart);
    const { cartInfo } = getCartData;

    useEffect(() => {
        if (cartInfo && cartInfo.length > 0) {
            const totalCartPrice = cartInfo.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0);

            setTotalPrice(totalCartPrice);
        }
    }, [cartInfo]);

    return totalPrice;
};

export default useTotalPrice;
