import {Form} from "react-bootstrap";
import React from "react";

interface Props {
    dataTest?: string;
}

export const ArgentInput = (props: Props) => (<div data-test={props.dataTest}><Form.Control /></div>);
