import React from 'react';

type Result = {
    value: number,
}

const Result = (props: Result) => { 
    return (
        <h1>{props.value}</h1>
    )
}

export default Result;