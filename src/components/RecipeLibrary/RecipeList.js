import React, { Component } from "react";
import "./Recipe.css"
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
        {this.props.recipes.map(singleRecipe => (
        <RecipeCard key={singleRecipe.id} recipe={singleRecipe} /> ))}
        </section>
      </React.Fragment>
    );
  }
}