import {Form, FormControlProps} from "react-bootstrap";
import React from "react";

interface Props extends FormControlProps {
    dataTest?: string;
}

export const ArgentInput = ({dataTest, ...otherProps}: Props) => {
    return (<div data-test={dataTest}><Form.Control {...otherProps} /></div>);
};
