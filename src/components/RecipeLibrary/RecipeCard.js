import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./RecipeStyle.css";
import "bootstrap/dist/css/bootstrap.min.css"

export default class RecipeCard extends Component {
  render() {
    return (

        <div className="card card-shadow">
  <img src={this.props.recipe.image} className="card-img-top"
  alt="https://www.ramw.org/sites/default/files/styles/content/public/default_images/default_0.jpg?itok=TlxjusRt"
  />
  <div className="card-body">
    <h5 className="card-title">{this.props.recipe.name}</h5>
    <p className="card-text">
    <Link className="nav-link-steps" to={`/recipes/${this.props.recipe.id}`}>
              Ingredients and Steps
            </Link>
            </p>
    {/* <a href={`/recipes/${this.props.recipe.id}`} className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
    );
  }
}
