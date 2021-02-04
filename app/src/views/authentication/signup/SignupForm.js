import { useCallback, useEffect, useState } from 'react';
import { HideIcon, LookIcon } from '../../../assets/icons';
import { Btn } from '../../../components/UI';
import { re } from '../../../shared/utility';

const SignupForm = () => {
  const [step, setStep] = useState(1);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [showCode, setShowCode] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
    code: '',
    epigrafe: '',
    activity: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);

    setUser({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
      code: '',
      epigrafe: '',
      activity: '',
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const checkValidation = useCallback(() => {
    const {
      firstName,
      lastName,
      email,
      password,
      password2,
      code,
      epigrafe,
      activity,
    } = user;
    if (
      firstName.length >= 3 &&
      lastName.length >= 3 &&
      re.test(email) &&
      password.length >= 6 &&
      password === password2 &&
      code === 'AQ*2021/KO' &&
      epigrafe.length >= 2 &&
      activity.length >= 3
    ) {
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
      <h2>Registrarse</h2>

      {step === 1 && (
        <>
          <div className="input-field">
            <input
              type="text"
              placeholder="Nombre"
              id="firstName"
              name="firstName"
              autoComplete="off"
              className={user.firstName.length < 3 ? 'error' : ''}
              onChange={(e) => {
                checkValidation();
                handleChange(e);
                if (e.target.value.length < 3) {
                  setErrorMsg('Nombre demasiado corto');
                } else {
                  setErrorMsg(null);
                }
              }}
              value={user.firstName}
              required
            />
            <label htmlFor="firstName">Nombre</label>
          </div>

          <div className="input-field">
            <input
              type="text"
              placeholder="Apellido"
              id="lastName"
              name="lastName"
              autoComplete="off"
              className={user.lastName.length < 3 ? 'error' : ''}
              onChange={(e) => {
                checkValidation();
                handleChange(e);
                if (e.target.value.length < 3) {
                  setErrorMsg('Apellido demasiado corto');
                } else {
                  setErrorMsg(null);
                }
              }}
              value={user.lastName}
              required
            />
            <label htmlFor="lastName">Apellido</label>
          </div>

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
        </>
      )}

      {step === 2 && (
        <>
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

          <div className="input-field">
            <input
              type={isHidePassword ? 'password' : 'text'}
              placeholder="Confirmar Password"
              id="password2"
              name="password2"
              autoComplete="off"
              className={user.password2 === user.password ? '' : 'error'}
              onChange={(e) => {
                checkValidation();
                handleChange(e);
                if (e.target.value !== user.password) {
                  setErrorMsg('Passwords no coinciden');
                } else {
                  setErrorMsg(null);
                }
              }}
              value={user.password2}
              required
            />
            <label htmlFor="password2">Confirmar Password</label>
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
        </>
      )}

      {step === 3 && (
        <>
          <div className="input-field">
            <input
              type={showCode ? 'text' : 'password'}
              placeholder="Código"
              id="code"
              name="code"
              autoComplete="off"
              className={user.code !== 'AQ*2021/KO' ? 'error' : ''}
              onChange={(e) => {
                checkValidation();
                handleChange(e);
                if (e.target.value !== 'AQ*2021/KO') {
                  setErrorMsg('Código invalido');
                } else {
                  setErrorMsg(null);
                }
              }}
              value={user.code}
              required
            />
            <label htmlFor="code">Código</label>
            {!showCode ? (
              <HideIcon
                className="input-field__svg"
                onClick={() => setShowCode(true)}
              />
            ) : (
              <LookIcon
                className="input-field__svg"
                onClick={() => setShowCode(false)}
              />
            )}
          </div>

          <div className="input-field">
            <input
              type="text"
              placeholder="Epígrafe"
              id="epigrafe"
              name="epigrafe"
              autoComplete="off"
              className={user.epigrafe.length < 2 ? 'error' : ''}
              onChange={(e) => {
                checkValidation();
                handleChange(e);
                if (e.target.value.length < 2) {
                  setErrorMsg('Epígrafe demasiado corto');
                } else {
                  setErrorMsg(null);
                }
              }}
              value={user.epigrafe}
              required
            />
            <label htmlFor="epigrafe">Epígrafe</label>
          </div>

          <div className="input-field">
            <input
              type="text"
              placeholder="Actividad"
              id="activity"
              name="activity"
              autoComplete="off"
              className={user.activity.length < 3 ? 'error' : ''}
              onChange={(e) => {
                checkValidation();
                handleChange(e);
                if (e.target.value.length < 3) {
                  setErrorMsg('Actividad demasiado corto');
                } else {
                  setErrorMsg(null);
                }
              }}
              value={user.activity}
              required
            />
            <label htmlFor="activity">Actividad</label>
          </div>
        </>
      )}

      {(step === 1 || step === 2) && (
        <div
          className="input-field btn-container"
          style={{ justifyContent: 'space-evenly' }}
        >
          <Btn
            disabled={step === 1}
            clicked={() => setStep(step - 1)}
            text="Anterior"
          />
          <Btn clicked={() => setStep(step + 1)} text="Siguiente" />
        </div>
      )}

      {step === 3 && (
        <div
          className="input-field btn-container"
          style={{ justifyContent: 'space-evenly' }}
        >
          <Btn
            disabled={step === 1}
            clicked={() => setStep(step - 1)}
            text="Anterior"
          />
          <Btn disabled={!isFormValid} text="Resgistrarme" btnType="submit" />
        </div>
      )}

      {errorMsg && <p className="error-msg">{errorMsg}</p>}
    </form>
  );
};

export default SignupForm;
