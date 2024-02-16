import { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import MovieList from '../components/MovieList';

const Discover = () => {
  const { searchResults, upcomingMovies } = useContext(MovieContext);

  const moviesToShow = searchResults.length > 0 ? searchResults : upcomingMovies;

  return (
    <div className="discover">
      <h1>Discover Movies</h1>
      {moviesToShow && <MovieList movies={moviesToShow} />}
    </div>
  );
};

export default Discover;