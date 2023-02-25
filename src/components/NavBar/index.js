import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../Logo';

const Navbar = () => {
  return (
    <NavContainer>
      <Logo />
      <NavItems>
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
`;

const NavItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  &:hover {
    color: #ccc;
  }
`;

export default Navbar;
