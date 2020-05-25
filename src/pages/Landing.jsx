import React from "react"

import Footer from "../components/Footer"
import Button from "../components/Button"

export default function Landing(props) {
  return (
    <>
      <section className="center fullpage" id="landing">
        <div className="landing__contents">
          <h1>DineIn</h1>
          <p>
            A glorified food menu database that actually <b>includes prices</b>
          </p>
          <div className="search">
            <form onSubmit={props.submitHandler}>
              <input
                type="text"
                placeholder="D Spot Cafe"
                value={props.search}
                onChange={props.changeHandler}
              />
            </form>
          </div>

          <Button href="/add">Add a Menu</Button>
        </div>
      </section>

      <section className="center fullpage showcase" id="intro">
        <div className="content-container">
          <h2>The concept is simple</h2>
          <p>
            Restaurants often try not to post their food prices on their online
            menus. Works well for their foot traffic, but hurts the consumer.
          </p>
          <div className="img-container">
            <img src="/images/couple.png" alt="" />
          </div>
        </div>
      </section>

      <section className="center fullpage showcase" id="meet">
        <div className="content-container">
          <h2>Meet DineIn</h2>
          <p>
            Dine In fixes that by providing consumers with the food prices they
            need to make smart decisions.
          </p>
          <div className="img-container">
            <img src="/images/ordering-girl.png" alt="" />
          </div>
        </div>
        <div className="search">
          <p>
            To get started, enter a restaurant name below to search our menu
            database
          </p>
          <input
            className="search__field"
            type="text"
            placeholder="D Spot Cafe"
          ></input>
        </div>
        <div className="add">
          <p>
            Or, if you know a place that doesn't show their online prices, you
            can add them here!
          </p>
          <Button href="/add">Add a Menu</Button>
        </div>
      </section>

      <Footer />
    </>
  )
}
