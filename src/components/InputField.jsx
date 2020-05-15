import React from 'react'

export default function InputField(props) {
    return (
        <input type={(props.type == null ? 'text' : props.type)}
            placeholder={(props.placeholder == null ? '' : props.placeholder)}>{props.children}</input>
    )
}