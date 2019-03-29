import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to Bon-APP-etite!</h1>
                <Link className="nav-link" to={'/login'}>Login/Register Here</Link>
            </div>
        );
    }
}