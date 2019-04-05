import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import auth0Client from "../authentication/Auth";

export default class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to Bon-APP-etite!</h1>
                <Link className="nav-link" onClick={auth0Client.signIn}>Login/Register Here</Link>
            </div>
        );
    }
}