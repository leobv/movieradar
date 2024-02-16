// Home.js
import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import MovieList from '../components/MovieList';
import Discover from './Discover';
import { SectionTitle } from './HomeStyle';

const Home = () => {
  const { popularMovies, upcomingMovies } = useContext(MovieContext);
  const { movies, isSearchActive } = useContext(MovieContext);

  return (
    <div>
      {isSearchActive ? (
        // Muestra los resultados de la búsqueda
        <Discover movies={movies} />
      ) : (
        <>
      <SectionTitle><h2>Popular Movies</h2></SectionTitle>
      <MovieList movies={popularMovies} />
      <SectionTitle><h2>Upcoming Movies</h2></SectionTitle>
      <MovieList movies={upcomingMovies} />
      </>
      )}
      </div>
  );
};

export default Home;