import { useStyles } from "./InputValue.style"
import React from 'react';

type InputValueProps = {
    id: string,
    onInputChange: ( event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputValue = (props: InputValueProps) => { 
    const styles = useStyles();
    return (
        <input
            className={styles.textField}
            id={props.id}
            type="number"
            onChange={props.onInputChange}
        />
    )
}

export default InputValue;