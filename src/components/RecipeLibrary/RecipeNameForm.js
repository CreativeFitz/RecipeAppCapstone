import React, { Component } from "react";



// WAITING ON ANSWER TO PULLING ID FROM CORRECT RECIPE FOR DIRECTIONS AND INGREDIENTS



export default class RecipeNameForm extends Component {
  // Set initial state
  state = {
    userId: "",
    image: "",
    recipeName: ""
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
    if (this.state.recipeName === "") {
      window.alert("Please enter the name of your recipe");
    } else {
      const recipe = {
        name: this.state.recipeName,
        image: this.state.recipeImage,
        prepped: false,
        userId: parseInt(sessionStorage.getItem(`credentials`))
       };

    //   When doing extra ingredients and directions, every time you hit the plus sign to add the next ingredient, have it post the 1st ingredient, clear state, print the recently inputed ingredients, restore input field to default so the next ingredient can be added.
    this.props
    .addRecipe(recipe)
    .then((parsedRecipe) => this.props.history.push(`/recipes/${parsedRecipe.id}/details`));

    }
  };

  render() {
    return (
      <React.Fragment>
        {/* INPUT FIELD FOR RECIPE NAME */}
        <form className="recipeNameForm">
          <div className="form-group">
            <h4 htmlFor="recipeName">Recipe name</h4>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="recipeName"
              placeholder="Recipe name"
            />
            <input
            type ="text"
            required
            className="form-control"
            onChange={this.handleFieldChange}
            id="recipeImage"
            placeholder="Enter your image URL"/>

             {/* Placed this inside the input div, may need to move outside the div */}
             <button
            type="submit"
            onClick={this.constructNewRecipe}

            className="btn "
          >Submit Recipe Name</button>
          </div>


        </form>
      </React.Fragment>
    );
  }
}