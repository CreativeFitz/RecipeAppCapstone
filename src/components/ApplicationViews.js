import { Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import Auth0Client from './authentication/Auth';
import Callback from './authentication/Callback';


// API handling functions //////////
import recipeAPIManager from '../modules/RecipeManager'
import directionAPIManager from '../modules/DirectionManager'
import ingredientAPIManager from '../modules/IngredientManager'
//////////////////////////////


// Page Components//
import Welcome from './WelcomeScreen/Welcome'
import RecipeList from '../components/RecipeLibrary/RecipeList';
import RecipeForm from './RecipeLibrary/RecipeNameForm';

class ApplicationViews extends Component {


  state = {
    users: [],
    recipes: [],
    ingredients: []
  }

  addRecipe = recipeObject =>
    recipeAPIManager.postRecipe(recipeObject)
      .then(() => recipeAPIManager.getAll())
      .then(recipes =>
        this.setState({
          recipes: recipes
        })
      );

  addDirection = directionObject =>
    directionAPIManager.postDirection(directionObject)
      .then(() => directionAPIManager.getAll())
      .then(directions =>
        this.setState({
          directions: directions
        })
      );

  addIngredient = ingredientObject =>
    ingredientAPIManager.postIngredient(ingredientObject)
      .then(() => ingredientAPIManager.getAll())
      .then(ingredients =>
        this.setState({
          ingredients: ingredients
        })
      );

  componentDidMount() {
    const newState = {};
    recipeAPIManager.getAllRecipes()
      .then(parsedRecipes => {
        newState.recipes = parsedRecipes;
      })

  }
  render() {
    return (
      <div className="container-div">
        <Route exact path="/" component={Welcome} />
        <Route exact path="/callback" component={Callback} />
        <Route
          exact
          path="/recipes"
          render={props => {
            if (Auth0Client.isAuthenticated()) {
              return <RecipeList {...props} recipes={this.state.recipes} />;
            } else {
              Auth0Client.signIn();
              return null;
            }
          }}
        />
        {/* <Route
          exact
          path="/animals"
          render={props => {
            if (Auth0Client.isAuthenticated()) {
              return <AnimalList {...props} animals={this.state.animals} />;
            } else {
              Auth0Client.signIn();
              return null;
            }
          }}
        /> */}
      </div>
    )
  }
}


export default ApplicationViews