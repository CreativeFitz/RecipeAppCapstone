import { Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import Auth0Client from './authentication/Auth';
import Callback from './authentication/Callback';
import recipeAPIManager from '../modules/RecipeManager'

class ApplicationViews extends Component {


    state = {
        users: [],
        recipes: [],
        ingredients: []
    }

    componentDidMount () {
        const newState ={};
        recipeAPIManager.getAllRecipes()
            .then(parsedRecipes => {
                newState.recipes = parsedRecipes;
            })

    }
    render() {
        return (
            <div className="container-div">
                <Route exact path="/callback" component={Callback} />
                <Route
                    exact
                    path="/"
                    render={props => {
                        if (Auth0Client.isAuthenticated()) {
                            // return <RecipeList {...props} recipes={this.state.recipes} />;
                        } else {
                            Auth0Client.signIn();
                            return null;
                        }
                    }}
                />
            </div>
        )
    }
}


export default ApplicationViews