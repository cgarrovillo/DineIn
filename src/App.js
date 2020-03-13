import React from 'react'
import fbase from './js/fbase'
import ordering from './images/couple.png'

function App() {
  return (
    <div className="main">
      {/* Initial Landing*/}
      <section className="landing">
        <h1 className="landing__title">Priced Menu</h1>
        <p className="landing__subtitle">A glorified food menu database that actually <b>includes prices</b></p>
        <div className="search">
          <input className="search__field" type="text" placeholder="D Spot Cafe"></input>
        </div>
      </section>


      <section className="content content--light">
        <h2>It's just business.</h2>
        <div className="image">
          <img src={ordering} alt="" />
        </div>
        <p>It's a simple strategy. Most restaurants don't put their prices online as they want you to physically go there and check them out, but why waste the gas?</p>
        <button className="btn">Browse Restaurants </button>
      </section>
    </div>
  );
}

export default App;

console.log(fbase);