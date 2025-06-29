import React from "react";
import "./FullScreenLoader.css"; // Import the styles

const FullScreenLoader = ({ isLoading }) => {
    if (!isLoading) return null;

    return (
        <div className="loader-overlay">
            <div className="loader-spinner"></div>
        </div>
    );
};

export default FullScreenLoader;
