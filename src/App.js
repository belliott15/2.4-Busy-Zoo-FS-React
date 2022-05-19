import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import ZooHome from './ZooHome';
import AdminPage from './Components/AdminPage/AdminPage';

export default function App() {
  return (
    <Router>
      <div className='top'>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/">
            <ZooHome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}