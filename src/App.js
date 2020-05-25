import React, { useState, useEffect } from "react"
import { Switch, Route, useHistory } from "react-router-dom"

import { storage } from "./services/firebase"

import Landing from "./pages/Landing"
import Add from "./pages/Add"
import RestaurantList from "./pages/RestaurantList"

function App() {
  const [search, setSearch] = useState("")
  const [menus, setMenus] = useState([])

  let history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    history.push("/menus")
  }

  function handleChange(e) {
    setSearch(e.target.value)
  }

  const storageRef = storage.ref()
  let listRef = storageRef.child("menus")
  useEffect(() => {
    listRef.listAll().then((res) => {
      res.prefixes.forEach((pref) => {
        pref.listAll().then((x) => {
          let path = x.items[0].location.path_
          var imgRef = storage.ref(path)
          imgRef.getDownloadURL().then((url) => {
            setMenus((menus) => menus.concat(url))
          })
        })
      })
    })
  }, [])

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Landing
            changeHandler={handleChange}
            search={search}
            submitHandler={handleSubmit}
          />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
        <Route path="/menus">
          <RestaurantList
            changeHandler={handleChange}
            search={search}
            submitHandler={handleSubmit}
            menus={menus}
          />
        </Route>
      </Switch>
    </>
  )
}

export default App
