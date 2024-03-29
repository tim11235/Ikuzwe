import React from 'react';
import './App.css';
import'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {HashRouter, Switch, Route} from 'react-router-dom'
import NotFound from "./components/NotFound/NotFound";
import Navbar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Resume from "./pages/Resume/Resume";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="app">
      <HashRouter basename="/">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/contact" exact component={Contact} />
          <Route path="*" component ={NotFound} />
        </Switch>
      </HashRouter>

      
    </div>
  );
}

export default App;
