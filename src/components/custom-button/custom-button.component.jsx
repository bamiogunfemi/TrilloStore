import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({ children,
     isGoogleSignIn,
     inverted, 
     ...otherProps }) => (
        <button
            className={`${inverted ? 
                "inverted" : ""} custom-button} ${isGoogleSignIn ? 
                "google-sign-in" : ""} custom-button`}
            {...otherProps}
        >
            {children}
        </button>
        );
export default CustomButton;
