/**
 *  The Movie DataBase API service
 *
 * <https://developers.themoviedb.org/3/getting-started/introduction>
 *
 */
import axios from "axios";
import apiKey from "../utilities/APIKey";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

/**
 *
 * @param {String} endpoint
 * @param {Object} queryParams
 * @returns Promise
 */
const get = async (endpoint, queryParams = null) => {
  let queryString = "&include_adult=false";
  if (queryParams) {
    Object.keys(queryParams).forEach((key) => {
      queryString += `&${key}=${queryParams[key]}`;
    });
  }

  const response = await axios.get(
    `${endpoint}?api_key=${apiKey}${queryString}`
    );

  return response.data;
};

/**
 * Get movies now playing in theaters for US region and the specified page
 * @param {Number} page
 * @returns Promise
 */
export const getNowPlaying = async (page) => {
  return get("/movie/now_playing", { region: "US", page });
};

/**
 * Get trending movies in the US region for the given time window
 * @param {String} timeWindow
 * @param {Number} page
 * @returns Promise
 */
export const getTrending = async (timeWindow = 'week', page) => {
  return get(`trending/movie/${timeWindow}`, { region: "US", page: page });
};

/**
 * Get the top rated movies for the US region for specified page
 * @param {Number} page
 * @returns Promise
 */
export const getTopRated = async (page) => {
  return get("/movie/top_rated", { region: "US", page: page });
};

/**
 * Get the listed genres (id and name)
 * @returns Promise
 */
export const getAllGenres = async () => {
  return get("/genre/movie/list");
};

/**
 * Get movies for the specified genre and page
 * @param {String} genreId
 * @param {Number} page
 * @returns Promise
 */
export const getMoviesForGenre = async (genreId, page) => {
  return get("/discover/movie", { with_genres: genreId, page: page });
};

/**
 * Get results (movies) for a search query
 * @param {Object} queryObj // With search string and page
 * @returns
 */
export const getMoviesBySearch = async (queryObj) => {
  if(queryObj.query === '') { return }
  return get("/search/movie", queryObj);
};

/**
 * Get details for the specified movie with credits and similar movies included in the response
 * @param {String} movieId
 * @returns Promise
 */
export const getMovieById = async (movieId) => {
  return get(`/movie/${movieId}`, { append_to_response: "credits,similar" });
};

/**
 * Get details for the specified actor with list of movie credits included in the response
 * @param {String} actorId
 * @returns
 */
export const getActorById = async (actorId) => {
  return get(`/person/${actorId}`, { append_to_response: "movie_credits" });
};
