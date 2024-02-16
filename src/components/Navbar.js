import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaBars } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import { NavbarContainer, NavbarLogo, NavbarMenu, SearchContainer, SearchInput, SearchButton, StyledLink } from './NavbarStyle';
import { MovieContext } from '../contexts/MovieContext';
import logo from '../assets/qlimax2.jpeg';
import useOnClickOutside from 'react-cool-onclickoutside';

const Navbar = () => {
  const { searchMovies } = useContext(MovieContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Estado para controlar si el campo de búsqueda está abierto o no

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen); // Cambia el estado de isSearchOpen cada vez que se hace clic en la lupa o apoya en el botón de búsqueda
  };
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    searchMovies(e.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const ref = useOnClickOutside(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  });

  return (
    <NavbarContainer>
      <NavbarLogo>
        <StyledLink to="/">
          <img src={logo} alt="Logo" />
        </StyledLink>
      </NavbarLogo>
      <SearchButton onClick={toggleSearch} onMouseEnter={toggleSearch} >
        <FaSearch className="icon" />
      </SearchButton>
      {isSearchOpen && ( // Si el campo de búsqueda está abierto, muéstralo
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={handleSearchChange}
            onMouseLeave={toggleSearch}
          />
        </SearchContainer>
      )}
      {isMobile ? (
        <FaBars className="icon" onClick={toggleMenu} />
      ) : (
        <NavbarMenu>
          <StyledLink to="/discover">Discover</StyledLink>
          <StyledLink to="/popular">Popular Movies</StyledLink>
          <StyledLink to="/upcoming">Upcoming Movies</StyledLink>
          <Link to="/profile">
            <FaUser className="icon" />
          </Link>
        </NavbarMenu>
      )}
      {isMenuOpen && isMobile && (
        <div ref={ref}>
          <NavbarMenu open={isMenuOpen}>
            <StyledLink to="/discover">Discover</StyledLink>
            <StyledLink to="/popular">Popular Movies</StyledLink>
            <StyledLink to="/upcoming">Upcoming Movies</StyledLink>
            <Link to="/profile">
              <FaUser className="icon" />
            </Link>
          </NavbarMenu>
        </div>
      )}
    </NavbarContainer>
  );
}

export default Navbar;