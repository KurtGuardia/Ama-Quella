import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { HideIcon, LookIcon } from '../../../assets/icons';
import { Btn, Spinner } from '../../../components/UI';
import { re } from '../../../shared/utility';
import { login } from '../../../store/actions/authActions';

const LoginForm = () => {
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.firebase.auth.uid);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (uid) {
      setIsLoading(false);
      history.push('/');
    }
    // eslint-disable-next-line
  }, [uid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(login(user));
    setIsLoading(true);

    setUser({
      email: '',
      password: '',
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const checkValidation = useCallback(() => {
    const { email, password } = user;
    if (re.test(email) && password.length >= 6) {
      setErrorMsg(null);
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [user]);

  useEffect(() => {
    checkValidation();
  }, [checkValidation]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>

      <div className="input-field">
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          autoComplete="off"
          className={!re.test(user.email) ? 'error' : ''}
          onChange={(e) => {
            checkValidation();
            handleChange(e);
            if (!re.test(e.target.value.trim())) {
              setErrorMsg('Introduce un email valido');
            } else {
              setErrorMsg(null);
            }
          }}
          value={user.email}
          required
        />
        <label htmlFor="email">Email</label>
      </div>

      <div className="input-field">
        <input
          type={isHidePassword ? 'password' : 'text'}
          placeholder="Password"
          id="password"
          name="password"
          autoComplete="off"
          className={user.password.length < 6 ? 'error' : ''}
          onChange={(e) => {
            checkValidation();
            handleChange(e);
            if (e.target.value.length < 6) {
              setErrorMsg('password demasiado corto');
            } else {
              setErrorMsg(null);
            }
          }}
          value={user.password}
          required
        />
        <label htmlFor="password">Password</label>
        {isHidePassword ? (
          <HideIcon
            className="input-field__svg"
            onClick={() => setIsHidePassword(false)}
          />
        ) : (
          <LookIcon
            className="input-field__svg"
            onClick={() => setIsHidePassword(true)}
          />
        )}
      </div>

      <div className="input-field btn-container">
        <Btn disabled={!isFormValid} text="Iniciar Sesión" btnType="submit" />
      </div>

      {isLoading && <Spinner />}

      {errorMsg && <p className="error-msg">{errorMsg}</p>}
    </form>
  );
};

export default LoginForm;
