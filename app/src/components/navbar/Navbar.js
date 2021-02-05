import './Navbar.scss';
import { signedInLinks, signedOutLinks } from './components/data';
import NavbarLink from './components/NavbarLink';
import { Link } from 'react-router-dom';
import { Btn } from '../UI';
import { useDispatch, useSelector } from 'react-redux';
import { changeIsLogging, logout } from '../../store/actions/authActions';

const Navbar = () => {
  const isLogging = useSelector((state) => state.auth.isLogging);
  const uid = useSelector((state) => state.firebase.auth.uid);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
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
          {uid &&
            signedInLinks.map((linkInfo) => (
              <NavbarLink key={linkInfo.id} {...linkInfo} />
            ))}

          {!uid &&
            signedOutLinks.map((linkInfo) => (
              <NavbarLink key={linkInfo.id} {...linkInfo} />
            ))}
        </ul>

        {uid ? (
          <Btn text="Salir" clicked={handleLogout} />
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
