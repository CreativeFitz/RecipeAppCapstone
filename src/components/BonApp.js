import React, { Component } from 'react';
import NavBar from './nav/NavBar';
import ApplicationViews from './ApplicationViews';
import Auth0Client from './authentication/Auth';
import {withRouter} from 'react-router-dom'


class BonApp extends Component {
    async componentDidMount() {
        if (this.props.location.pathname === '/callback') return;
        try {
          await Auth0Client.silentAuth();
          this.forceUpdate();
        } catch (err) {
          if (err.error !== 'login_required');
        }
      }
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default withRouter(BonApp)