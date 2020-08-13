import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Welcome from "./components/welcome/Welcome.jsx";
import Clock from "./components/clock/Clock.jsx";
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';
import NotFound from './components/notfound/NotFound';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>

        <Route
          path="/welcome/:name"
          render={(props) => { return <Welcome {...props} name={props.match.params.name} /> }}
        />
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Davey Strus" />}
        />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={NotFound} />

      </Switch>



    </div>
  );

}
export default App;
