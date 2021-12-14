import React from 'react';

import { useStyles } from './Button.style'

type ButtonProps = {
    children: string,
    onUpdate: () => void,
}

const Button = (props: ButtonProps) => { 
    const styles = useStyles()

    return (
        <button className={styles.button} type="button" onClick={props.onUpdate}>
            {props.children}
        </button>
    )
}

export default Button;