import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../Logo';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer>
      <Logo />
      <Toggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <HamburgerBar />
        <HamburgerBar />
        <HamburgerBar />
      </Toggle>
      <NavItems isOpen={isOpen}>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">About Us</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/faq">FAQ</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/articles">Articles</NavLink>
        </NavItem>
      </NavItems>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  position: sticky;
  top: 0;
`;

const Toggle = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const HamburgerBar = styled.span`
  height: 3px;
  width: 25px;
  background-color: #fff;
  margin: 2px 0;
`;

const NavItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 44px;
    left: ${({ isOpen }) => isOpen ? '0' : '-100%'};
    width: 100%;
    background-color: #333;
    transition: all 0.3s ease-in-out;
  }
`;

const NavItem = styled.li`
  margin: auto 20px auto 0;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    margin: .3rem 0;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  &:hover {
    color: #ccc;
  }

  @media (max-width: 768px) {
    padding: 10px;
    width: 100%;
  }
`;

export default Navbar;
