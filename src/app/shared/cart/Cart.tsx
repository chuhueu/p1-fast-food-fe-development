import React from 'react';
import CartEmpty from './cart-empty/CartEmpty';

const Cart = () => {
    const [showCart, setShowCart] = React.useState(false);
    const closeCart = () => {
        setShowCart(false);
    };

    return (
        <>
            <div
                className={
                    showCart
                        ? 'fixed right-0 top-0  w-[400px] h-screen bg-white z-[999] rounded-md translate-x-0 transition-all delay-75 ease-linear cursor-pointer opacity-1 visible'
                        : 'fixed right-0 top-0  w-[400px] h-screen bg-white z-[999] rounded-md translate-x-full transition-all delay-75 ease-linear cursor-pointer opacity-0 invisible'
                }
            >
                <CartEmpty closeCart={closeCart} />
            </div>

            <div className="relative">
                <div
                    className={
                        showCart
                            ? 'fixed inset-0 bg-overlay z-[998] translate-x-0 transition-all delay-75 ease-linear cursor-pointer opacity-1 visible'
                            : 'fixed inset-0 bg-overlay z-[998] translate-x-full transition-all delay-75 ease-linear cursor-pointer opacity-0 invisible'
                    }
                ></div>
            </div>
        </>
    );
};

export default Cart;
