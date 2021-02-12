import './App.scss';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import { Navbar } from './components';
import { Auth, Home, Tutorial, User } from './views';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const uid = useSelector((state) => state.firebase.auth.uid);
  const history = useHistory();

  useEffect(() => {
    if (!uid) history?.push('/auth');
    // eslint-disable-next-line
  }, [uid]);

  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/auth' component={Auth} />
          <Route path='/tutorial' component={Tutorial} />
          <Route path='/usuario' component={User} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
