import './Navbar.scss';
import { SignedInLinks } from './components/data';
import NavbarLink from './components/NavbarLink';
import { Link } from 'react-router-dom';
import { Btn } from '../UI';

const Navbar = () => {
  const logout = () => {
    console.log('logout');
  };
  return (
    <nav className="navbar">
      <div className="navbar__title">
        <Link to="/">
          <h1>Ama Quella Abogados</h1>
        </Link>
      </div>

      <div className="navbar__btns">
        <ul className="navbar__links">
          {SignedInLinks.map((linkInfo) => (
            <NavbarLink key={linkInfo.id} {...linkInfo} />
          ))}
        </ul>

        <Btn text="Salir" clicked={logout} />
      </div>
    </nav>
  );
};

export default Navbar;
