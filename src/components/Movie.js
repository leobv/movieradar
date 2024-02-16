import React, { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import ReactPlayer from 'react-player';
import { StyledMovie, MovieImage, MovieTitle, MovieInfo, VoteAverage } from './MovieStyle';

const Movie = ({ movie }) => {
  const { getTrailer, trailer } = useContext(MovieContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleMovieClick = () => {
    getTrailer(movie.id);
    setIsPlaying(true);
    setIsVisible(true);
  };

  useEffect(() => {
    if (!isPlaying) {
      getTrailer(null);
      setIsVisible(false);
    }
  }, [isPlaying]);

  return (
    <StyledMovie onClick={handleMovieClick}>
      <MovieImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <MovieInfo>
        <MovieTitle>{movie.title}</MovieTitle>
        <VoteAverage>{movie.vote_average}</VoteAverage>
      </MovieInfo>
      {isVisible && isPlaying && trailer && <ReactPlayer url={`https://www.youtube.com/watch?v=${trailer}`} playing={true} controls={true} />}
    </StyledMovie>
  );
};

export default Movie;