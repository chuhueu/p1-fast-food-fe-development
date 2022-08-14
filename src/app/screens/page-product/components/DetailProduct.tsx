import React from 'react';
import ItemProduct from './ItemProduct';

const DetailProduct = () => {
    const [showDetail, setShowDetail] = React.useState(false);

    return (
        <>
            <div className={showDetail ? 'fixed inset-0 z-[999] flex visible' : 'fixed inset-0 z-[999] flex invisible'}>
                <div
                    className={
                        showDetail
                            ? 'absolute w-full h-full bg-overlay transition-all delay-[.25s] ease-out opacity-100'
                            : 'absolute w-full h-full bg-overlay transition-all delay-[.25s] ease-out opacity-0 '
                    }
                ></div>
                <div
                    className={
                        showDetail
                            ? 'w-2/3 h-5/6 z-10 m-auto p-5 rounded-md shadow-btnLogin bg-white transition-all delay-[.5s] ease-linear translate-y-0 visible opacity-100'
                            : 'w-2/3 h-5/6 z-10 m-auto p-5 rounded-md shadow-btnLogin bg-white transition-all delay-[.5s] ease-linear translate-y-[300%] invisible opacity-0'
                    }
                >
                    <ItemProduct />
                </div>
            </div>
        </>
    );
};

export default DetailProduct;
