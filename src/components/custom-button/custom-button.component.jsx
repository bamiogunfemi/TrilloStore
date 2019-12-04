import React from "react";

import { CustomButtonContainer } from "./custom-button.style";

const CustomButton = ({ props, children }) => (
    <CustomButtonContainer
        {...props}
    >
        {children}
    </CustomButtonContainer>
);
export default CustomButton;
