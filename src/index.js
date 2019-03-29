import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import BonApp from './components/BonApp'

ReactDOM.render(
    <Router>
        <BonApp />
    </Router>
    , document.getElementById('root'))
