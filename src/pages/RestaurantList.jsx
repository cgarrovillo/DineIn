import React, { useEffect } from "react"

import RestaurantCard from "../components/RestaurantCard"

export default function RestaurantList(props) {
  let menus = props.menus
  console.log(menus)
  return (
    <>
      <nav>
        <form onSubmit={props.submitHandler}>
          <input
            type="text"
            placeholder="D Spot Cafe"
            value={props.search}
            onChange={props.changeHandler}
          />
        </form>
      </nav>

      <div className="center ">
        {menus.map((menu) => (
          <RestaurantCard src={menu.src} title={menu.restaurant} />
        ))}
      </div>
    </>
  )
}
