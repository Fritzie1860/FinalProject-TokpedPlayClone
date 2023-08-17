// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Video from './pages/video';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Video} />
        <Route path="/video" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;