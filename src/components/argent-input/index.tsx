import {Form, FormControlProps} from "react-bootstrap";
import React from "react";

interface Props extends FormControlProps {
    dataTest?: string;
}

export const ArgentInput = (props: Props) => (<div data-test={props.dataTest}><Form.Control {...props} /></div>);
