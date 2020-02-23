import React from 'react'

export default function Content(props) {
    return (
        <div className="content">
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <p></p>
        </div>
    )
}

