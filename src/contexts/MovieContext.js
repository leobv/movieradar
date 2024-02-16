import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [trailer, setTrailer] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  const API_KEY = "ce1a03a5694ab5083901e4986d6f4d6b";
  const BASE_URL = "https://api.themoviedb.org/3";

  const fetchMovies = async (url) => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get(url);
      return response.data.results;
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const getMovies = async (query) => {
    const results = await fetchMovies(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    setMovies(results);
  };

  const getMovie = async (id) => {
    const result = await fetchMovies(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    setMovie(result);
  };

  const searchMovies = async (searchTerm) => {
    const results = await fetchMovies(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}`);
    setSearchResults(results);
  };

  const getUpcomingMovies = async () => {
    const results = await fetchMovies(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);
    setUpcomingMovies(results);
  };

  const getPopularMovies = async () => {
    const results = await fetchMovies(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    setPopularMovies(results);
  };

  const getTopRatedMovies = async () => {
    const results = await fetchMovies(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
    setTopRatedMovies(results);
  };

  const getNowPlayingMovies = async () => {
    const results = await fetchMovies(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
    setNowPlayingMovies(results);
  };

  const getTrailer = async (id) => {
    if (id) {
      const response = await axios.get(
        `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
      );
      const key = response.data.results[0]?.key;
      setTrailer(key);
    } else {
      setTrailer(null);
    }
  };

  const getLatestMovies = async () => {
    const response = await axios.get(
      `${BASE_URL}/movie/latest?api_key=${API_KEY}`
    );
    setLatestMovies(response.data);
  };

  const getPlaying = () => {
    setPlaying(true);
  }

  useEffect(() => {
    getMovies("");
    getUpcomingMovies();
    getPopularMovies();
    getTopRatedMovies();
    getNowPlayingMovies();
    getLatestMovies();
    getMovie(550);
    getTrailer(550);
    getPlaying();
  }, []);


  return (
    <MovieContext.Provider
      value={{
        movies,
        movie,
        trailer,
        playing,
        loading,
        error,
        searchResults,
        latestMovies,
        upcomingMovies,
        popularMovies,
        topRatedMovies,
        nowPlayingMovies,
        getTrailer,
        getMovies,
        searchMovies,
        getMovie,
        getUpcomingMovies,
        getPopularMovies,
        getNowPlayingMovies
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
