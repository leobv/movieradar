import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #323641;
  color: #fff;  
  font-family: 'Roboto', sans-serif;
  line-height: 1.5; // Mejora la legibilidad del texto
`;

export const Content = styled.main`
  flex: 1;
  padding: 20px 50px;
  background-color: #323641;
  margin-top: 60px; 

  @media (max-width: 600px) {
    padding: 10px 20px;
  }
`;