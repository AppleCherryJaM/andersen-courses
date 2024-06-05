import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Routes} from 'react-router-dom';
import QuizConfig from './pages/QuizConfig';

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" exact element={<QuizConfig />}>
    //       <QuizConfig />
    //     </Route>
    //   </Routes>
    // </Router>
    <QuizConfig />
  );
};

export default App;
