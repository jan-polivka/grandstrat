import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import { 
  BrowserRouter as Router,
  Link, Redirect, Route, Switch }
   from 'react-router-dom';
import StratView from './components/StratView';
import Create from './components/Create';
import StratFormParent from './components/StratFormParent';

function App() {

  const padding = {
    padding: 5
  }

  return (
    <div className="container">


      <Router>
        <div>
          <Link style={padding} to="/">Home</Link>
          <Link style={padding} to="/StratView">Strats uploaded</Link>
          <Link style={padding} to="/Create">Create a new strat</Link>
        </div>

        <Switch>
          <Route path="/StratView" component={StratView} />
          <Route path="/Create" component={Create} />
          <Route path="/" component={Welcome} />
        </Switch>
      </Router>
    </div>
    );
}

export default App;
