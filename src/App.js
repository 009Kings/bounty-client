import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import './App.css';

import Header from './wrappers/Header';
import Footer from './wrappers/Footer';
import Content from './content/Content';

function App() {
  let [currentUser, setCurrentUser] = useState("")
  let [isAuthenticated, setIsAuthenticated] = useState(true)

  useEffect(() => {
    let token;
    if(localStorage.getItem('jwtToken') === null) {
      setIsAuthenticated(false)
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.jwtToken);
      setCurrentUser(token);
      setIsAuthenticated(true);
    }
  }, [])

  let nowCurrentUser = (userData) => {
    console.log("oh hey this is even running")
    setCurrentUser(userData);
    setIsAuthenticated(true)
  }

  let handleLogout = (e) => {
    e.preventDefault()
    if(localStorage.getItem('jwtToken') !== null) {
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }

  return (
    <Router>
      <div className="App">
        <Header handleLogout={handleLogout} isAuthed={isAuthenticated} />
        <main>
          <Content nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} currentUser={currentUser} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
