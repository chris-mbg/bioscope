import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation'
import GenreListPage from './pages/GenreListPage'
import HomePage from './pages/HomePage'
import NowPlayingPage from './pages/NowPlayingPage'
import PopularPage from './pages/PopularPage'
import TopRatedPage from './pages/TopRatedPage'

function App() {

  return (
    <>
    <Navigation />
    <div className="App">

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/movies/now-playing">
          <NowPlayingPage />
        </Route>

        <Route exact path="/movies/popular">
          <PopularPage />
        </Route>

        <Route exact path="/movies/top-rated">
          <TopRatedPage />
        </Route>

        <Route exact path="/genres/all">
          <GenreListPage />
        </Route>

      </Switch>
    </div>
    </>
  )
}

export default App
