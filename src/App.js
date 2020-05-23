import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Add from './pages/Add'
import RestaurantList from './pages/RestaurantList'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/add">
          <Add />
        </Route>
        <Route exact path="/menus">
          <RestaurantList />
        </Route>
      </Switch>
    </>
  );
}

export default App;