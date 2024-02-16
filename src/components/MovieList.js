import React from 'react';
import Movie from './Movie';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MovieList = ({ movies }) => {
    return (
        <StyledMovieList>
        {movies.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
            <Movie movie={movie} />
            </Link>
        ))}
        </StyledMovieList>
    );
    }
    const StyledMovieList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
    `;
    export default MovieList;
    