import React from "react"

export default function RestuarantCard(props) {
  return (
    <a href={props.href}>
      <div className="img-container">
        <img src={props.src} />
      </div>
      <p>{props.title}</p>
      <hr />
    </a>
  )
}
