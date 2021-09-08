import React from "react";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import ActorDetailsPage from "./pages/ActorDetailsPage";
import GenreListPage from "./pages/GenreListPage";
import GenrePage from "./pages/GenrePage";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import PopularPage from "./pages/PopularPage";
import TopRatedPage from "./pages/TopRatedPage";

function App() {
  return (
    <div className="pb-3">
      <Navigation />
      <Container className="App">
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

          <Route exact path="/movies/movie/:id">
            <MovieDetailsPage />
          </Route>

          <Route exact path="/actors/actor/:id">
            <ActorDetailsPage />
          </Route>

          <Route exact path="/genres/all">
            <GenreListPage />
          </Route>

          <Route exact path="/genres/genre/:id">
            <GenrePage />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
