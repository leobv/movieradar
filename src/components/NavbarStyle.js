import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px 20px 20px;
  background-color: #323641;
  color: #fff;
  position: relative;
`;

export const NavbarLogo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    margin-right: 10px;
  }
`;

export const NavbarMenu = styled.div`
  display: ${props => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 60px;
  background-color: rgba(0, 0, 0, 0.7);
  width: 200px;
  @media (min-width: 800px) {
    position: static;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    background-color: transparent;
    transform: none;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  margin-right: 10px;
  border: none;
  padding: 5px;
  border-radius: 5px;
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  color: #fff;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  margin: 10px 0;
  text-decoration: none;
  &:last-child {
    margin-right: 0;
  }
  @media (min-width: 750px) {
    color: #fff;
    &:hover {
      color: #e50914;
    }
  }
`;
