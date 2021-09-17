import React from "react";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/utilities/Navigation";
import Footer from "./components/utilities/Footer";
import ActorDetailsPage from "./pages/ActorDetailsPage";
import GenreListPage from "./pages/GenreListPage";
import GenrePage from "./pages/GenrePage";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import SearchPage from "./pages/SearchPage";
import TopRatedPage from "./pages/TopRatedPage";
import TrendingPage from "./pages/TrendingPage";

function App() {
  return (
    <div id="App">
      <Navigation />
      <Container className="">
        <Switch>
          <Route exact path="/">
            <HomePage />
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

          <Route exact path="/movies/now-playing">
            <NowPlayingPage />
          </Route>

          <Route exact path="/movies/trending">
            <TrendingPage />
          </Route>

          <Route exact path="/movies/top-rated">
            <TopRatedPage />
          </Route>

          <Route exact path="/movies/search">
            <SearchPage />
          </Route>

          <Route exact path="/movies/movie/:id">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>

        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
