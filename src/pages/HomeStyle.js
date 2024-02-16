import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 20px 50px;
  background-color: #323641;
`;
export const SectionTitle = styled.h2`
  font-size: 1em;
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
`;

export const MovieList = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
gap: 1rem;
  padding: 20px;
  background-color: #323641;
  border-radius: 20px;
  margin-top: 20px;
`;

