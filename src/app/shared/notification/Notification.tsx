import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// mui icon
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import CloseIcon from '@mui/icons-material/Close';

//import "./style.css"

const Notification = () => {
    const toastType = toastTypes.success;

    const ToastBody = () => (
        <div
            id="toast-success"
            className="flex items-center w-full max-w-xs p-4 text-gray-500 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
            role="alert"
        >
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                <DoneOutlineIcon className="!w-5 !h-5" />
            </div>
            <div className="flex flex-col justify-center">
                <h4 className="text-lg font-bold text-green-400 ml-4">{toastType.title}</h4>
                <div className="ml-3 text-sm font-normal">{toastType.desc}</div>
            </div>
            <button
                type="button"
                className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                data-dismiss-target="#toast-success"
                aria-label="Close"
            >
                <span className="sr-only">Close</span>
                <CloseIcon className="!w-5 !h-5" />
            </button>
        </div>
    );

    return toast(ToastBody, {
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnHover: false
    });
};

const toastTypes = {
    success: {
        title: 'Success',
        desc: 'The product has been added to cart'
    }
};

export default Notification;
