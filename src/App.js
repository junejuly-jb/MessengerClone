import React from 'react';
import routes from './routes/routes';
import { useRoutes } from 'react-router-dom';
import auth from './auth/auth'

function App() {
  
  const isLoggedIn = auth.isAuthenticated()
  const routing = useRoutes(routes(isLoggedIn))

  return (
      <div className="App">
        {routing}
      </div>
  );

}

export default App;
