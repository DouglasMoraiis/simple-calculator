import { useStyles } from "./InputValue.style"
import React from 'react';

type InputValueProps = {
    id: string,
    value: number,
    onInputChange: ( event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputValue = (props: InputValueProps) => { 
    const styles = useStyles();
    return (
        <input
            className={styles.textField}
            id={props.id}
            type="number"
            value={props.value}
            onChange={props.onInputChange}
        />
    )
}

export default InputValue;