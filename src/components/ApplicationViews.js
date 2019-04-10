import { Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import Auth0Client from './authentication/Auth';
import Callback from './authentication/Callback';
import "./ApplicationViews.css"


// API handling functions //////////
import recipeAPIManager from '../modules/RecipeManager'
import directionAPIManager from '../modules/DirectionManager'
import ingredientAPIManager from '../modules/IngredientManager'
//////////////////////////////


// Page Components//
import Welcome from './WelcomeScreen/Welcome'
import RecipeList from '../components/RecipeLibrary/RecipeList';
import RecipeNameForm from './RecipeLibrary/RecipeNameForm';
import RecipeDetailsForm from './RecipeLibrary/RecipeDetailsForm'
import RecipeDetail from './RecipeLibrary/RecipeDetails'
import Meals4Week from './Meals4Week/meals4Week';
import IngredientsList from './IngredientsList/IngredientsList'

class ApplicationViews extends Component {


  state = {
    users: [],
    recipes: [],
    ingredients: [],
    directions: [],
    meals4Week: []
  }

  addRecipe = recipeObject =>
    recipeAPIManager.postRecipe(recipeObject)
  // .then(() => recipeAPIManager.getAllRecipes())
  // .then(recipes =>
  //   this.setState({
  //     recipes: recipes
  //   })
  // );

  deleteRecipe = id => {
    return recipeAPIManager.deleteRecipe(id)
      .then(recipes =>
        this.setState({
          recipes: recipes
        })
      );
  };

  addDirection = directionObject =>
    directionAPIManager.postDirection(directionObject)
      .then(() => directionAPIManager.getAllDirections())
      .then(directions =>
        this.setState({
          directions: directions
        })
      );

      updateDirections = editedDirectionObject => {
        return directionAPIManager.put(editedDirectionObject)
          .then(() => directionAPIManager.getAllDirections())
          .then(directions => {
            this.setState({
              directions: directions
            });
          });
      };

      deleteDirection = id => {
        return directionAPIManager.deleteDirection(id)
        .then(() => directionAPIManager.getAllDirections())
          .then(directions =>
            this.setState({
              directions: directions
            })
          );
      };

  addIngredient = ingredientObject =>
    ingredientAPIManager.postIngredient(ingredientObject)
      .then(() => ingredientAPIManager.getAllIngredients())
      .then(ingredients =>
        this.setState({
          ingredients: ingredients
        })
      );


      updateIngredients = editedIngredientObject => {
        return ingredientAPIManager.put(editedIngredientObject)
          .then(() => ingredientAPIManager.getAllIngredients())
          .then(ingredients => {
            this.setState({
              ingredients: ingredients
            });
          });
      };

      deleteIngredient = id => {
        return ingredientAPIManager.deleteIngredient(id)
        .then(() => ingredientAPIManager.getAllIngredients())
        .then(ingredients =>
            this.setState({
              ingredients: ingredients
            })
          );
      };



  returnToLibrary = () => {
    return recipeAPIManager.getAllRecipes()
      .then(recipes => {
        this.setState({ recipes: recipes })
      })
  };

  recipeChecked = (recipeId, recipeObject) => {
		return recipeAPIManager.patchRecipeCheck(recipeObject, recipeId).then(() => recipeAPIManager.getAllRecipes()).then((recipes) =>
			this.setState({
				recipes: recipes
			})
		);
  };

  recipePrep = () => {
    return recipeAPIManager.recipesPrepped()
    .then(meals4week =>
      this.setState ({
        meals4Week:meals4week
      }))
  }



  componentDidMount() {
    const newState = {};
    recipeAPIManager.getAllRecipes()
      .then(recipes => (
        newState.recipes = recipes))
      .then(() => ingredientAPIManager.getAllIngredients())
      .then(ingredients => (
        newState.ingredients = ingredients
      ))
      .then(() => directionAPIManager.getAllDirections())
      .then(directions => (
        newState.directions = directions
      ))
      .then(() => recipeAPIManager.recipesPrepped())
      .then(meals4week =>(
        newState.meals4Week = meals4week
      ))
      .then(() => this.setState(newState))

  }
  render() {
    return (
      <div className="container-div">
        <Route exact path="/" render={()=> {if (Auth0Client.isAuthenticated()){return <Redirect to="/recipes"/>} else { return <Welcome/>}}} />
        <Route exact path="/callback" component={Callback} />
        <Route
          exact path="/recipes"
          render={props => {
            if (Auth0Client.isAuthenticated()) {
              return <RecipeList {...props} recipes={this.state.recipes} />;
            } else {
              Auth0Client.signIn();
              return null;
            }
          }}
        />
        <Route
          exact path="/recipes/new"
          render={props => {
            if (Auth0Client.isAuthenticated()) {
            return <RecipeNameForm
                {...props}
                addRecipe={this.addRecipe}
              />;
            } else {
              Auth0Client.signIn();
              return null;
            }
          }}
        />
        <Route
          exact path="/recipes/:recipeId(\d+)"
          render={props => {
            if (Auth0Client.isAuthenticated()) {
            return <RecipeDetail
                {...props}
                recipes=
                {this.state.recipes}
                ingredients={this.state.ingredients}
                directions={this.state.directions}
                deleteRecipe={this.deleteRecipe}
                updateIngredients={this.updateIngredients}
                updateDirections={this.updateDirections}
                recipeChecked={this.recipeChecked}
              />;
            } else {
              Auth0Client.signIn();
              return null;
            }
          }}
        />
        <Route
          exact path="/recipes/:recipeId(\d+)/details"
          render={props => {
            if (Auth0Client.isAuthenticated()) {
            return <RecipeDetailsForm
                {...props}
                ingredients={this.state.ingredients}
                directions={this.state.directions}
                addDirection={this.addDirection}
                addIngredient={this.addIngredient}
                returnToLibrary={this.returnToLibrary}
                deleteRecipe={this.deleteRecipe}
                deleteDirection={this.deleteDirection}
                deleteIngredient={this.deleteIngredient}
                updateIngredients={this.updateIngredients}
                updateDirections={this.updateDirections}
              />;
            } else {
              Auth0Client.signIn();
              return null
            }
          }}
        />
        <Route exact path="/meals4week"
        render={props=> {
          if(Auth0Client.isAuthenticated()){
            return <Meals4Week
            {...props}
            recipes={this.state.recipes}
            meals4Week={this.state.meals4Week}
            />;
          } else {
            Auth0Client.signIn();
            return null
          }
        }}
        />
        <Route exact path="/ingredientsList"
        render={props=>{
          if (Auth0Client.isAuthenticated()){
            return <IngredientsList
            {...props}
            recipes={this.state.recipes}
            meals4Week={this.state.meals4Week}
            ingredients={this.state.ingredients}
            />;
          } else {
            Auth0Client.signIn();
            return null
          }
        }}
        />
      </div>
    )
  }
}


export default ApplicationViews