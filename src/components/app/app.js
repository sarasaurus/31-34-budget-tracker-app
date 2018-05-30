import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from './../dashboard/dashboard';
import '../../../styles/main.scss';

export default class App extends React.Component {
  render() {
    return (
<div className="app">
<BrowserRouter>
<div>
  <header>
    <h1>Trello Style App</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
  </header>
  <Route 
    exact
    path="/"
    component= { Dashboard }
    />
</div>
</BrowserRouter>
  
</div>
    );
  }
}
