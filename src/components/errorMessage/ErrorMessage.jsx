import React from 'react'

const ErrorMessage = ({ message }) => {
    return (
        message ? <span>{message}</span> : null
    );
}

export default ErrorMessage