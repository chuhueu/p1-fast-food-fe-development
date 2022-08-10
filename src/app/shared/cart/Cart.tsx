import CartEmpty from './cart-empty/CartEmpty';

import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../redux/reducers';
import showCart from '../../redux/action-creators';

const Cart = () => {
    const dispatch = useDispatch();
    const isShowCart = useSelector((state: State) => state.cart.isShowCart);
    const [statusCart, setStatusCart] = useState(isShowCart);

    useEffect(() => {
        setStatusCart(isShowCart);
    }, [isShowCart]);

    const closeCart = () => {
        dispatch(showCart(false));
    };

    return (
        <>
            <div
                className={
                    statusCart
                        ? 'fixed right-0 top-0  w-[400px] h-screen bg-white z-[999] rounded-md translate-x-0  transition-all delay-75 ease-linear cursor-pointer opacity-1 visible '
                        : 'fixed right-0 top-0  w-[400px] h-screen bg-white z-[999] rounded-md translate-x-full  transition-all delay-75 ease-linear cursor-pointer  opacity-0 invisible'
                }
            >
                <CartEmpty closeCart={closeCart} />
            </div>

            <div className="relative">
                <div
                    className={
                        statusCart
                            ? 'fixed inset-0 bg-overlay z-[998] translate-x-0   transition-all delay-75 ease-linear cursor-pointer  opacity-1 visible'
                            : 'fixed inset-0 bg-overlay z-[998] translate-x-full   transition-all delay-75 ease-linear cursor-pointer  opacity-0 invisible'
                    }
                    onClick={closeCart}
                ></div>
            </div>
        </>
    );
};

export default Cart;
