import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import PopularMovies from './PopularMovies'
import TopRatedMovies from './TopRatedMovies'
import NowPlaying from './NowPlaying'

const ListTabs = () => {
  return (
    <Tabs defaultActiveKey="popular" id="uncontrolled-tab-example" className="mb-3 justify-content-evenly">
      <Tab eventKey="popular" title="Most Popular" className="text-light">
        <PopularMovies />
      </Tab>
      <Tab eventKey="top-rated" title="Top Rated">
        <TopRatedMovies />
      </Tab>
      <Tab eventKey="now-playing" title="Now Playing">
        <NowPlaying />
      </Tab>
    </Tabs>
  );
}

export default ListTabs;