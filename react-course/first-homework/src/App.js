// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Navigate } from 'react-router-dom';
import QuizConfig from './pages/QuizConfig';
import './App.css';  // Import the CSS file

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    // <Router>
      <div className={`container ${darkMode ? 'dark' : ''}`}>
        {/* <Switch> */}
          {/* <Route path="/" exact> */}
            <QuizConfig darkMode={darkMode} setDarkMode={setDarkMode} />
          {/* </Route> */}
          {/* Add routes for other screens like quiz and stats */}
        {/* </Switch> */}
      </div>
    // </Router>
  );
};

export default App;
