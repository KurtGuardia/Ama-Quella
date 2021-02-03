import './Auth.scss';
import AuthBg from '../../assets/images/auth-bg.png';
import { Btn } from '../../components/UI';

const style = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${AuthBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const Auth = () => {
  return (
    <div className="auth view" style={style}>
      <h1>Auth</h1>
      <Btn text="Volver" prevIcon={true} position="abs-bottom" />
    </div>
  );
};

export default Auth;
