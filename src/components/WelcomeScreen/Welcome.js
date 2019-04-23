import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import auth0Client from "../authentication/Auth";
import "./Welcome.css";


export default class Welcome extends Component {
    render() {
        return (
            <div className="introParent">
                <div className="intro">
                <h1 className="welcome-text">Welcome to</h1>
                <h1 className="bonApp">Bon-APP-etite!</h1>
                <Link className="nav-link" onClick={auth0Client.signIn}>Login/Register Here</Link>
            </div>
            </div>
        );
    }
}