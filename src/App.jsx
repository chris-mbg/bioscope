import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
    <Navigation />
    <div className="App">

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

      </Switch>
    </div>
    </>
  )
}

export default App
