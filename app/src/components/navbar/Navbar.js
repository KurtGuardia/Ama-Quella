import './Navbar.scss';
import { signedInLinks, signedOutLinks, adminLinks } from './components/data';
import NavbarLink from './components/NavbarLink';
import { Link, useHistory } from 'react-router-dom';
import { Btn } from '../UI';
import { useDispatch, useSelector } from 'react-redux';
import { changeIsLogging, logout } from '../../store/actions/authActions';
import { AQ_Logo } from '../../assets/icons';

const Navbar = () => {
  const isLogging = useSelector((state) => state.auth.isLogging);
  const isAdmin = useSelector((state) => state.firebase.profile.isAdmin);
  const uid = useSelector((state) => state.firebase.auth.uid);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
  };

  const loginClicked = () => {
    if (history.location.pathname !== '/auth') history.push('/auth');
    dispatch(changeIsLogging());
  };

  return (
    <nav className="navbar">
      <div className="navbar__title">
        <Link to="/">
          <AQ_Logo className="navbar__title--logo" />
          <h1>Ama Quella</h1>
        </Link>
      </div>

      <div className="navbar__btns">
        <ul className="navbar__links">
          {isAdmin &&
            adminLinks.map((linkInfo) => (
              <NavbarLink key={linkInfo.id} {...linkInfo} />
            ))}

          {uid &&
            !isAdmin &&
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
            clicked={loginClicked}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
