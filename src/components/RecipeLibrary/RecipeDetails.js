import React, { Component } from "react";



export default class RecipeDetail extends Component {
  render() {
    /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
    const recipe =
      this.props.recipes.find(
        a => a.id === parseInt(this.props.match.params.recipeId)
      ) || {}

    return (
      <section className="recipe">
        <div key={recipe.id} className="card">
          <div className="card-body">
            <h2 className="card-title">
              {recipe.name}
            </h2>
            <h5 className="card-title">Ingredients Needed</h5>
              <ul>
                {this.props.ingredients.map(singleIngredient =>{
                  if (singleIngredient.recipeId === this.props.match.params.recipeId) {
                    return <li className={singleIngredient.id} key={singleIngredient.id}>{singleIngredient.ingredient}</li>
                  }
                  else {
                    return null
                  }
                  })}

              </ul>
              <h5 className="card-title">Ingredients Needed</h5>
              <ol>
                {this.props.directions.map(singleDirection =>{
                  if (singleDirection.recipeId === this.props.match.params.recipeId) {
                    return <li className={singleDirection.id} key={singleDirection.id}>{singleDirection.direction}</li>
                  }
                  else {
                    return null
                  }
                  })}

              </ol>

            <button
              href="#"
              className="btn btn-danger"
              onClick={() =>
                this.props
                  .deleteRecipe(recipe.id)
                  .then(() => this.props.history.push("/recipes"))
              }
            >
              Delete
            </button>
            {/* <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                this.props.history.push(
                  `/recipes/${recipe.id}/edit`
                );
              }}
            >
              Edit
            </button> */}
          </div>
        </div>
      </section>
    );
  }
}