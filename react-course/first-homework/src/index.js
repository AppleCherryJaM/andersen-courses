import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";

import { quizStore } from './store/quizStore';
// import { initialState } from './slices/ScoreSlice';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={quizStore}>
        <App />
    </Provider>
);

