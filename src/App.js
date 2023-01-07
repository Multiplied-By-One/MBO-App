import React from 'react';

// Import fonts
import '@fontsource/walter-turncoat/index.css';
import "@fontsource/economica/index.css"; // Weight 400.
import "@fontsource/francois-one/index.css"; // Weight 400.

import AuthRouter from './routes/AuthRouter';

import { BrowserRouter } from 'react-router-dom';
import useAuthedUser from './hooks/user/useAuthedUser';
import Layout from './components/layout/Layout';
import AppRouter from './routes/AppRouter';


function App() {
  const [user, loading, error] = useAuthedUser()
  const router = !user ? <AuthRouter/>: <AppRouter/>
 //const router = <AuthRouter/>
  return (
    <BrowserRouter>
      <Layout>
        {loading && "loading..."}

        {error && "Error"}

        {!loading && router}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
