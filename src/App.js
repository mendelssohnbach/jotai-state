import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Profile } from './pages';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
};

export default App;
