import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import QuizConfig from './screens/configScreen/QuizConfig';
import QuizMain from './screens/mainScreen/QuizMain';
import QuizResult from './screens/resultScreen/QuizResult';
import QuizStat from './screens/statisticsScreen/QuizStat';

import './App.css';
import { Questions as quizData } from './data/Questions';
import { useSelector } from 'react-redux';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [time, setTime] = useState(1);
  const [isEnd, setIsEnd] = useState(false);
  const filters = useSelector(state => state.quiz.statistics[state.quiz.statistics.length-1]);

  function filterQuestions () {
    let filteredQuestions = [];
    if (filters.category && filters.type && filters.difficulty) {
      for (let element of quizData){
        if (element.category === filters.category
          && element.difficulty === filters.difficulty
          && element.type === filters.type
        ) {
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

  let filteredData, questionNumbers;
  if (filters) {
    filteredData = filterQuestions()
    questionNumbers = filteredData.length
  }

  return (
    <Router>
      <div className={`container ${darkMode ? 'dark' : ''}`}>
          <h1>Quiz App</h1>
          <hr />
        <Switch>
          <Route path="/quizConfig">
            <QuizConfig categories={[...categories]}
              types={[...types]}
              setTime={setTime}/>
          </Route>
          <Route path="/quizMain">
            <QuizMain quizData={filteredData} time={time} setIsEnd={setIsEnd}/>
          </Route>
          <Route path="/quizResult">
            <QuizResult questionQuantity={questionNumbers} filters={filters}/>
          </Route>
          <Route path="/quizStat">
            <QuizStat />
          </Route>
          <Redirect to="/quizConfig"/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
