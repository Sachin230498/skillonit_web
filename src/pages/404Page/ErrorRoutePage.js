import React from 'react'
import "./ErrorRoutePage.css"

const ErrorRoutePage = () => {
    return (
        <div className='fnf-page'>
            <h1 className='fnf-h-text-1'>404 - Oops! Page Not Found</h1>
            <p className='fnf-p-text-1'>The page you're looking for doesn't exist. It may have been moved or deleted.</p>
            <a href="/" className='fnf-btn'>Go Back Home</a>
        </div>
    )
}

export default ErrorRoutePage
