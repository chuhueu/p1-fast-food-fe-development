import { useContext, useEffect, useState } from 'react';

import CartEmpty from './cart-empty/CartEmpty';
import CartItem from './cart-empty/CartItem';

import { AuthContext } from '../../context/AuthContext';

const Cart = () => {
    const { isShowCart, setIsShowCart } = useContext(AuthContext);
    const closeCart = () => {
        setIsShowCart(false);
    };

    return (
        <>
            <div
                className={
                    isShowCart
                        ? 'fixed right-0 top-0  w-[400px] h-screen bg-white z-[999] rounded-tl-md rounded-bl-md translate-x-0  transition-all delay-75 ease-linear cursor-pointer opacity-1 visible '
                        : 'fixed right-0 top-0  w-[400px] h-screen bg-white z-[999] rounded-tl-md rounded-bl-md translate-x-full  transition-all delay-75 ease-linear cursor-pointer  opacity-0 invisible'
                }
            >
                <CartItem closeCart={closeCart} />

                {/* <CartEmpty closeCart={closeCart} /> */}
            </div>

            <div className="relative">
                <div
                    className={
                        isShowCart
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
