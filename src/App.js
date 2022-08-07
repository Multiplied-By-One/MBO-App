import React from 'react';
import logo from './logo.svg';
import './App.css';
import { auth } from './firebase.config';
import AuthRouter from './routes/AuthRouter';
import { useAuthState } from 'react-firebase-hooks/auth'
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [user, loading, error] = useAuthState(auth)
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
