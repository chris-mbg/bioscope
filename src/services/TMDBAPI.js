/**
 *  The Movie DataBase API service
 *
 * <https://developers.themoviedb.org/3/getting-started/introduction>
 *
 */
import axios from "axios";

const apiKey = "ad4ffebe9c5cb2b228d5e1ab4c177669";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const get = async (endpoint, queryParams = null) => {
  let queryString = "&adult=false";
  if (queryParams) {
    Object.keys(queryParams).forEach((key) => {
      queryString += `&${key}=${queryParams[key]}`;
    });
  }
  console.log("query string: ", queryString);

  const response = await axios.get(
    `${endpoint}?api_key=${apiKey}${queryString}`
  );
  console.log("response", response);

  return response.data;
};

export const testGet = async () =>
  await get("/discover/movie", {
    region: "SV",
    ["release_date.gte"]: "2016-11-16",
    ["release_date.lte"]: "2021-12-02",
    ["with_release_type"]: "2|3",
  });

export const getNowPlaying = async () => {
  return get("/movie/now_playing", { region: "US" });
};
export const getPopular = async () => {
  return get("/movie/popular", { region: "US" });
};
export const getTopRated = async () => {
  return get("/movie/top_rated", { region: "US" });
};

export const getAllGenres = async () => {
  return get("/genre/movie/list");
};
export const getMoviesForGenre = async (genreId) => {
  return get('/discover/movie', { with_genres: genreId })
}

export const getMovieById = async (movieId) => {
  return get(`/movie/${movieId}`, { append_to_response: 'credits,similar'})
}

export const getActorById = async (actorId) => {
  return get(`/person/${actorId}`, { append_to_response: 'movie_credits'})
}