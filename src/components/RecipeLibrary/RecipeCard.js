import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class RecipeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {this.props.recipe.name}
            {/* Instead of using a link maybe switch it over to a button. */}
            <Link className="nav-link" to={`/recipes/${this.props.recipe.id}`}>
              Ingredients and Steps
            </Link>
          </h5>
        </div>
      </div>
    );
  }
}
