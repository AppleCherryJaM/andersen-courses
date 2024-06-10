// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import QuizConfig from './screens/configScreen/QuizConfig';
import QuizMain from './screens/mainScreen/QuizMain';
import Timer from './components/timer/Timer';
import './App.css';  // Import the CSS file

// export const ScoreContext = React.createContext();

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    
    <Router>
      <div className={`container ${darkMode ? 'dark' : ''}`}>
          <h1>Quiz App</h1>
          <hr />
          <QuizMain />
        {/* <Switch>
          <Route path="/" >
            <Timer min={1} />
          </Route>
          <Route path="/quizConfig">
            <QuizConfig darkMode={darkMode} setDarkMode={setDarkMode} />
          </Route>
          <Route path="/quizMain">
            <ScoreContext.Provider value={score}>
              <QuizMain />
            </ScoreContext.Provider>
          </Route>
          <Redirect to="/quizConfig"/>
        </Switch> */}
      </div>
    </Router>
  );
};

export default App;
