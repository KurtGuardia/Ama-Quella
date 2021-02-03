import { NavLink } from 'react-router-dom';

const NavbarLink = ({ text, url }) => {
  return (
    <li className="navbar__link">
      <NavLink to={url}>{text}</NavLink>
    </li>
  );
};

export default NavbarLink;
