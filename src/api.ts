import { useMatch } from "react-router-dom";

const API_KEY = "e728e85d387922f0d291c0d62860815c";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
  backdrop_path: string;
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}

export interface IGetMovie {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
  vote_average: number;
}

//Now Playing Movie
export function getNowplayingMovie() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzI4ZTg1ZDM4NzkyMmYwZDI5MWMwZDYyODYwODE1YyIsInN1YiI6IjY0ZjZjOWYzYjIzNGI5MDBhZGM2MzMwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S9-PnQtWnZukP96PgxMNkjQlauzzN_872pk2IS3sP98",
    },
  };

  return fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=2&region=kr`
  ).then((response) => response.json());
}

//Popular Movie
export function getPopularMovie() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzI4ZTg1ZDM4NzkyMmYwZDI5MWMwZDYyODYwODE1YyIsInN1YiI6IjY0ZjZjOWYzYjIzNGI5MDBhZGM2MzMwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S9-PnQtWnZukP96PgxMNkjQlauzzN_872pk2IS3sP98",
    },
  };

  return fetch(
    `${BASE_PATH}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=2`,
    options
  ).then((response) => response.json());
}

//Top Rated Movie
export function getTopRatedMovie() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzI4ZTg1ZDM4NzkyMmYwZDI5MWMwZDYyODYwODE1YyIsInN1YiI6IjY0ZjZjOWYzYjIzNGI5MDBhZGM2MzMwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S9-PnQtWnZukP96PgxMNkjQlauzzN_872pk2IS3sP98",
    },
  };

  return fetch(
    `${BASE_PATH}/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=2`,
    options
  ).then((response) => response.json());
}

//Upcoming Movie

export function getUpcomingMovie() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzI4ZTg1ZDM4NzkyMmYwZDI5MWMwZDYyODYwODE1YyIsInN1YiI6IjY0ZjZjOWYzYjIzNGI5MDBhZGM2MzMwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S9-PnQtWnZukP96PgxMNkjQlauzzN_872pk2IS3sP98",
    },
  };

  return fetch(
    `${BASE_PATH}/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=2`,
    options
  ).then((response) => response.json());
}
