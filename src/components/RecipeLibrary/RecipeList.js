import React, { Component } from "react";
import RecipeCard from "./RecipeCard";

export default class RecipeList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="recipeButton">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push("/recipes/new");
            }}
          >
            New Recipe
          </button>
        </div>
        <section className="recipes">
        {this.props.recipes.map(singleRecipe => { if (singleRecipe.userId === parseInt(sessionStorage.getItem(`credentials`))){ return <RecipeCard key={singleRecipe.id} recipe={singleRecipe} />
         }
        else { return null }})}
        </section>
      </React.Fragment>
    );
  }
}