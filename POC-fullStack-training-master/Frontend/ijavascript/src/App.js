import React from 'react';
import Loginpage from './components/Loginpage'
import Team from './components/Team'
import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
 
     <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Loginpage} />
          <Route path="/dashboard" component={Team} />
          <Route path="/about" component={Team} />
          <Route path="/team" component={Team} />
      </Switch>
      </div>
    </Router>

  );
}

export default App;
