import React, { useState, createContext, useContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ViewedContext = createContext();

export const useViewedContext = () => useContext(ViewedContext);

const ViewedContextProvider = (props) => {

  const [recentlyViewed, setRecentlyViewed] = useLocalStorage('recently-viewed', []);

  const addMovieToList = (movieData) => {
    // If the movie is already in the list, then it will not be added again.
    if (recentlyViewed.find(mov => mov.id === movieData.id)) { return }

    if (recentlyViewed.length < 10) {
      setRecentlyViewed(prevState => [movieData, ...prevState])
    } else {
      setRecentlyViewed(prevState => [movieData, ...prevState.slice(0,9)])
    }
  }

  const values = {
    recentlyViewed,
    addMovieToList
  }

  return (
    <ViewedContext.Provider value={values}>
      {props.children}
    </ViewedContext.Provider>
  );
}

export default ViewedContextProvider;