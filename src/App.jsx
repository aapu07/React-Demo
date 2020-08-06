import React from 'react';
import './App.css';
import Welcome from "./components/welcome/Welcome.jsx";
import Clock from "./components/clock/Clock.jsx";
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Welcome name="ISBC" />
      <Clock />
      <Contact />

    </div>
  );
}

export default App;
