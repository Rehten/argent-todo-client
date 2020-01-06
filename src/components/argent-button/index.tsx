import React from "react";
import { Button, ButtonProps } from "react-bootstrap";


interface Props extends ButtonProps {
    dataTest?: string;
    children?: string;
    onClick?: () => void;
}

export const ArgentButton = ({dataTest, onClick, ...otherProps}: Props) => {
    return (
        <div data-test={dataTest}>
            <Button {...otherProps} onClick={onClick} />
        </div>
    );
};