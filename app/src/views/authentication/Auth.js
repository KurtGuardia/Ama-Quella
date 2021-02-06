import './Auth.scss';
import AuthBg from '../../assets/images/auth-bg.png';
import { Btn } from '../../components/UI';
import { useSelector } from 'react-redux';
import LoginForm from './login/LoginForm';
import SignupForm from './signup/SignupForm';

const style = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${AuthBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const Auth = () => {
  const isLogging = useSelector((state) => state.auth.isLogging);

  return (
    <div className='auth view' style={style}>
      {isLogging ? <LoginForm /> : <SignupForm />}
      <a href='https://amaquella.netlify.app/'>
        <Btn text='Volver' prevIcon={true} position='abs-bottom-left' />
      </a>
    </div>
  );
};

export default Auth;
