import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import QuizConfig from './screens/configScreen/QuizConfig';
import QuizMain from './screens/mainScreen/QuizMain';
import QuizResult from './screens/resultScreen/QuizResult';
import QuizError from './screens/errorScreen/QuizError';

import { QuizContext } from './context/QuizContext';
import './App.css';
import { Questions as quizData } from './data/Questions';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [score, setScore] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [time, setTime] = useState(1);
  const [filters, setFilters] = useState('Heresy');

  const filterQuestions = () => {
    let filteredQuestions = [];
    if (filters.category && filters.type && filters.difficulty) {
      for (let element of quizData){
        console.log(`Element: ${element.category} ${element.difficulty} ${element.type}`);
        console.log(`Filter: ${filters.category} ${filters.difficulty} ${filters.type}`)
        if (element.category === filters.category
          && element.difficulty === filters.difficulty
          && element.type === filters.type
        ) {
          console.log("Entered 4");
          filteredQuestions.push(element);
        }
      }
    }  
    return filteredQuestions;
  }

  let categories = new Set(); 
  let types = new Set();
  for (let element of quizData) {
    categories.add(element.category);
    types.add(element.type);
  }

  const filteredData = filterQuestions();

  return (
    <Router>
      <div className={`container ${darkMode ? 'dark' : ''}`}>
          <h1>Quiz App</h1>
          <hr />
        <Switch>
          <Route path="/quizConfig">
            {/* <QuizContext.Provider value={{ filterQuestions }}> */}
              <QuizConfig categories={[...categories]}
                types={[...types]}
                setTime={setTime} 
                setFilters={setFilters}/>
            {/* </QuizContext.Provider> */}
          </Route>
          <Route path="/quizMain">
            <QuizContext.Provider value={{ setScore }}>
              <QuizMain quizData={filteredData} time={time}/>
            </QuizContext.Provider>
          </Route>
          <Route path="/quizResult">
            <QuizResult />
          </Route>
          <Redirect to="/quizConfig"/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
