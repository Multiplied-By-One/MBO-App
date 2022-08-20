import React from 'react';
import logo from './logo.svg';
import './App.css';

import AuthRouter from './routes/AuthRouter';

import { BrowserRouter } from 'react-router-dom';
import useAuthedUser from './hooks/user/useAuthedUser';

function App() {
  const [user, loading, error] = useAuthedUser()
  return (
    <BrowserRouter>
      <div className="App">
        {loading && "loading..."}

        {error && "Error"}

        {!user ?
          <AuthRouter/>:
          `Logged in as ${JSON.stringify(user)}`
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
