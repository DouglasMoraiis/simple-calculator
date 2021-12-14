import React from 'react';

type InputValueProps = {
    id: string,
    onInputChange: ( event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputValue = (props: InputValueProps) => { 
    return (
        <input
            id={props.id}
            type="number"
            onChange={props.onInputChange}
        />
    )
}

export default InputValue;