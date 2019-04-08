import React, { Component } from "react";



export default class RecipeDetail extends Component {

  state = {
    userId: "",
    userEditedDirection: "",
    IngredientToEdit: {},
    DirectionToEdit: {},
    userEditedIngredient: ""
};

editIngredient = evt => {
  evt.preventDefault();
  const editedIngredient = {
      ingredient: this.state.userEditedIngredient,
      recipeId: this.state.IngredientToEdit.recipeId,
      id: this.state.IngredientToEdit.id
  };
  this.props.updateIngredients(editedIngredient)
      .then( () => this.setState({ IngredientToEdit: "" }))
      .then()

}

generateIngredientForm = (singleIngredient) => {
  this.setState({ IngredientToEdit: singleIngredient })
  };

editDirection = evt => {
    evt.preventDefault();
    const editedDirection = {
        direction: this.state.userEditedDirection,
        recipeId: this.state.DirectionToEdit.recipeId,
        id: this.state.DirectionToEdit.id
    };
    this.props.updateDirections(editedDirection)
        .then( () => this.setState({ DirectionToEdit: "" }))
        .then()

  }

  generateDirectionForm = (singleDirection) => {
    this.setState({ DirectionToEdit: singleDirection })
    };

handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
};

render() {

  const currentRecipeId = this.props.match.params.recipeId


    /*
            Using the route parameter, find the recipe that the
            user clicked on by looking at the `this.props.recipes`
            collection that was passed down from ApplicationViews
        */
    const recipe =
      this.props.recipes.find(
        a => a.id === parseInt(currentRecipeId)
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
                  if (singleIngredient.recipeId === currentRecipeId) {
                    return <li className={singleIngredient.id} key={singleIngredient.id}>{singleIngredient.ingredient}
                    </li>
                  }
                  else {
                    return null
                  }
                  })}

              </ul>
{/* /////////////////////////Directions List///////////////////////// */}

              <h5 className="card-title">Directions</h5>
              <ol>
                {this.props.directions.map(singleDirection =>{
                  if (singleDirection.recipeId === currentRecipeId) {
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
            <button
              href="#"
              className="btn btn-danger"
              onClick={() => this.props.history.push(`/recipes/${currentRecipeId}/details`)
              }
            >Edit Ingredients or Directions</button>
          </div>
        </div>
      </section>
    );
  }
}