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
        <Route path="/" exact component={Dashboard} />
        <Route path="/video" component={Video} />
      </Switch>
    </Router>
  );
}

export default App;