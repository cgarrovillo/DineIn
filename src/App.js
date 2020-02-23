import React from 'react';
import Content from './components/Content'

function App() {
  return (
    <div className="main">
      {/* Initial Landing*/}
      <div className="landing">
        <h1>Priced Menu</h1>
        <p>A glorified food menu database that actually <b>includes prices</b></p>
        <input type="text" value="default"></input>
      </div>
    </div>
  );
}

export default App;
