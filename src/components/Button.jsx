import React from 'react'

export default function Button(props) {
    return (
        <a href={props.href} >
            <button>{props.children}</button>
        </a>
    )
}