import './Home.scss';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const uid = useSelector((state) => state.firebase.auth.uid);
  const history = useHistory();

  useEffect(() => {
    if (!uid) history.push('/auth');
    // eslint-disable-next-line
  }, [uid]);

  return (
    <div className="home">
      <h1>Home</h1>
    </div>
  );
};

export default Home;
