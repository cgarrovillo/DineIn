import React from 'react';
import Content from './components/Content'
import fbase from './js/fbase'

function App() {
  return (
    <div className="main">
      {/* Initial Landing*/}
      <section className="landing">
        <h1 className="landing__title">Priced Menu</h1>
        <p className="landing__subtitle">A glorified food menu database that actually <b>includes prices</b></p>

      </section>
      <section className="search">
        <input className="search__field" type="text" value="default"></input>
      </section>

      <Content title="" />
    </div>
  );
}

export default App;

console.log(fbase);