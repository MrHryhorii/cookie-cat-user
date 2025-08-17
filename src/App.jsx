import React from 'react'
import Clicker from './components/Clicker'
import Cat from './components/Cat'
import User from './components/User';
import './App.css'

function App() {

  return (
    <div className="app">
      <h1 className="appTitle">Cookie • Cat • Users</h1>

      <div className="sections">
        <section className="card">
          <h2 className="cardTitle">CookieClicker</h2>
          <p className="cardHint">Click on cookie — +1 point</p>
          <Clicker/>
        </section>

        <section className="card">
          <h2 className="cardTitle">CatFacts</h2>
          <p className="cardHint">5 random facts from API</p>
          <Cat/>
        </section>

        <section className="card">
          <h2 className="cardTitle">Users</h2>
          <p className="cardHint">List + add new user</p>
          <User/>
        </section>
      </div> 
    </div>
  );
};

export default App
