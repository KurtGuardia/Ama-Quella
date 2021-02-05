import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Auth, Home, Tutorial } from './views';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={Auth} />
          <Route path="/tutorial" component={Tutorial} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
