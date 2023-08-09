import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import LoginPage from './components/login';
import SignupPage from './components/signup';
import ProfilePage from './components/profile';
import Navbar from './components/navbar';
import AboutUsPage from './components/about';
import Home from './components/home';

function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      <Navbar />
      
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>


        <Route path="/signup">
          <SignupPage />
        </Route>

        <Route path="/profile">
          <ProfilePage userEmail={location.state?.userEmail} />
        </Route>
        
        <Route path="/about">
          <AboutUsPage />
        </Route>
        
        <Route path="/">
          {/* Show Home component only on the initial landing page */}
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
