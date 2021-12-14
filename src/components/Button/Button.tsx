import React from 'react';

type ButtonProps = {
    children: string,
    onUpdate: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

const Button = (props: ButtonProps) => { 
    return (
        <button type="button" onClick={props.onUpdate}>
            {props.children}
        </button>
    )
}

export default Button;