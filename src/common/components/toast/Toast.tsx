import React from 'react';
import {ToastContainer} from 'react-toastify';

export const Toast = () => {
    return (
        <ToastContainer
            position="bottom-left"
            autoClose={5000}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    )
}