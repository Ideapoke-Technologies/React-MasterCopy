import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import './i18n/config';
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById("OuterPages");
const root = ReactDOM.createRoot(rootElement);

root.render(
    <Router>
        <App />
    </Router>
);

// basename="/iep"