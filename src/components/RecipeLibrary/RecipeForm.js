import React, { Component } from "react";
import RecipeManager from "../../modules/RecipeManager"


// WAITING ON ANSWER TO PULLING ID FROM CORRECT RECIPE FOR DIRECTIONS AND INGREDIENTS



export default class AnimalForm extends Component {
  // Set initial state
  state = {
    userId: "",
    name: "",
    ingredients: "",
    direction: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*
        Local method for validation, creating recipe object, and
        invoking the function reference passed from parent component
     */
  constructNewRecipe = evt => {
    evt.preventDefault();
    if (this.state.name === "") {
      window.alert("Please enter the name of your recipe");
    } else {
      const recipe = {
        name: this.state.name,
        userId: parseInt(sessionStorage.getItem(`userId`))
       };
       const direction = {
        direction: this.state.direction,
        // recipeId: Id from recently posted recipe
       };
       const ingredient = {
           ingredient: this.state.ingredient,
        // recipeId: Id from recently posted recipe
       }

    //   When doing extra ingredients and directions, every time you hit the plus sign to add the next ingredient, have it post the 1st ingredient, clear state, print the recently inputed ingredients, restore input field to default so the next ingredient can be added.
      this.props
        .addRecipe(recipe)
        .then()
        .then(() => this.props.history.push("/recipes"));
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* INPUT FIELD FOR RECIPE NAME */}
        <form className="animalForm">
          <div className="form-group">
            <label htmlFor="recipeName">Recipe name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="recipeName"
              placeholder="Recipe name"
            />
          </div>
          {/* INPUT FIELD AND BUTTON FOR INGREDIENT */}
          <div className="form-group">
            <label htmlFor="ingredient">Ingredient</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="ingredient"
              placeholder="Ingredient"
            />
            <button
            type="submit"
            onClick= {/*Put a function to post first ingredient to DB, print all directions for recipe, and clear input field*/}
            className="btn btn-primary"
          >Next Ingredient</button>
          </div>
        {/* Input field and button for directions */}
          <div className="form-group">
            <label htmlFor="direction">Step</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="ingredient"
              placeholder="Ingredient"
            />
            <button
            type="submit"
            onClick= {/*Put a function to post first direction to DB, print all directions for recipe, and clear input field*/}
            className="btn btn-primary"
          >Next Step</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}