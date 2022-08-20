import React from 'react';

// Import fonts
import '@fontsource/walter-turncoat/index.css';
import "@fontsource/economica/index.css"; // Weight 400.
import "@fontsource/francois-one/index.css"; // Weight 400.

import AuthRouter from './routes/AuthRouter';

import { BrowserRouter } from 'react-router-dom';
import useAuthedUser from './hooks/user/useAuthedUser';
import Layout from './components/layout/Layout';

function App() {
  const [user, loading, error] = useAuthedUser()
  return (
    <BrowserRouter>
      <Layout>
        {loading && "loading..."}

        {error && "Error"}

        {!user ?
          <AuthRouter/>:
          `Logged in as ${JSON.stringify(user)}`
        }
      </Layout>
    </BrowserRouter>
  );
}

export default App;
