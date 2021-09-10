import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";
import NowPlaying from "./NowPlaying";

const ListTabs = () => {
  return (
      <Tabs
        defaultActiveKey="popular"
        id="uncontrolled-tab-example"
        className="justify-content-evenly"
      >
        <Tab eventKey="popular" title="Most Popular" className="background-opacity-dark pt-3 pb-4 px-1">
          <PopularMovies />
        </Tab>
        <Tab eventKey="top-rated" title="Top Rated" className="background-opacity-dark pt-3 pb-4 px-1">
          <TopRatedMovies />
        </Tab>
        <Tab eventKey="now-playing" title="Now Playing" className="background-opacity-dark pt-3 pb-4 px-1">
          <NowPlaying />
        </Tab>
      </Tabs>
  );
};

export default ListTabs;
