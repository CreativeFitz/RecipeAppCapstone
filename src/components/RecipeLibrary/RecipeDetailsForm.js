import React, { Component } from "react";
import RecipeManager from "../../modules/RecipeManager"

export default class RecipeDetailsForm extends Component {

    state = {
        recipeId: "",
        ingredients: "",
        directions: "",
        recipe: ""
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      };

      constructNewRecipeDetails = evt => {
        evt.preventDefault();
        if (this.state.ingredients === "") {
          window.alert("Please enter your ingredients");
        } else if (this.state.directions === ""){window.alert("Please enter your directions");}
        // CHECK TO MAKE SURE THE ELSE IF IS BEING HIT
        else {
           const direction = {
            direction: this.state.direction,
            // recipeId: Id from recently posted recipe
           };
           const ingredient = {
               ingredient: this.state.ingredient,
            // recipeId: Id from recently posted recipe
           };
        }};

        componentDidMount() {
            RecipeManager.getOneRecipe(this.props.match.params.recipesId).then(recipe => {
              this.setState({
                recipe: recipe.name,
                recipeId: recipe.Id
              });
            });
          }

           render() {
            return (
              <React.Fragment>{/* INPUT FIELD FOR INGREDIENT */}
              <form className="recipeDetailsForm">
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
                // onClick= {/*Put a function to post first ingredient to DB, print all directions for recipe, and clear input field*/}
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
                // onClick= {/*Put a function to post first direction to DB, print all directions for recipe, and clear input field*/}
                className="btn btn-primary"
              >Next Step</button>
              </div>
              </form>
              </React.Fragment>

            );
}
}