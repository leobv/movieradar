import styled from 'styled-components';

export const StyledMovie = styled.div`
  position: relative;
  padding-bottom: 150%;
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const MovieInfo = styled.div`
  display: flex;
  position: absolute;
  text-size-adjust: 100%;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 15%;
  background-color: rgba(0, 0, 0, 0.5); // Añade un fondo negro semi-transparente
  backdrop-filter: blur(20px); // Añade un efecto de desenfoque al fondo
  color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 0,5em
`;

export const MovieTitle = styled.h3`
  margin: 0;
`;

export const VoteAverage = styled.span`
backdrop-filter: blur(20px);

`;