import './Home.scss';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FormImg } from '../../assets/images';

const Home = () => {
  const uid = useSelector((state) => state.firebase.auth.uid);
  const history = useHistory();

  useEffect(() => {
    if (!uid) history.push('/auth');
    // eslint-disable-next-line
  }, [uid]);

  return (
    <div className="home view">
      <h2 className="home__title">Bienvenid@ a Ama Quella web app</h2>
      <p className="home__desc">
        En Ama Quella asesoria fiscal nos preocupamos por brindarles el mejor
        servicio a nuestro clientes por ende hemos desarrollado esta apliacion
        web para con la finalidad de facilitar el ingreso de sus facturas,
        incrementar la seguridad y evitar contratiempos
      </p>
      <br />
      <p className="home__desc">
        Los datos provistos por nuestro usuarios estan encryptados por la
        tecnologia Firebase por Google.{' '}
        <a
          href="https://firebase.google.com/support/privacy?hl=es-419"
          target="_blank"
          rel="noreferrer"
        >
          Politica de proteccion de datos
        </a>
      </p>

      <ul className="home__list">
        <li>
          <strong>Tutorial:</strong> Guia simple del funcionamiento de la
          aplicación
        </li>
        <li>
          <strong>Declarar:</strong>
        </li>
        <li>
          <strong>Usuario:</strong> Guia simple del funcionamiento de la
          aplicación
        </li>
      </ul>
      <FormImg className="form-img" />
    </div>
  );
};

export default Home;
