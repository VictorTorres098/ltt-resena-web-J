import React from "react";
import styled from 'styled-components';

export const ButtonReact = ({title,metodoModal }) => {
    return (
        <Button  onClick={(metodoModal)}>{title}</Button>     
    )
}

export default ButtonReact;

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
`;


