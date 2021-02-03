import './Navbar.scss';
import { signedInLinks, signedOutLinks } from './components/data';
import NavbarLink from './components/NavbarLink';
import { Link } from 'react-router-dom';
import { Btn } from '../UI';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeIsLogging } from '../../store/actions/authActions';

const Navbar = () => {
  const isLogging = useSelector((state) => state.auth.isLogging);
  const dispatch = useDispatch();
  const [isLoggedIn] = useState(false);

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
          {isLoggedIn &&
            signedInLinks.map((linkInfo) => (
              <NavbarLink key={linkInfo.id} {...linkInfo} />
            ))}

          {!isLoggedIn &&
            signedOutLinks.map((linkInfo) => (
              <NavbarLink key={linkInfo.id} {...linkInfo} />
            ))}
        </ul>

        {isLoggedIn ? (
          <Btn text="Salir" clicked={logout} />
        ) : (
          <Btn
            text={isLogging ? 'Registrarse' : 'Login'}
            clicked={() => dispatch(changeIsLogging())}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
