import React, { Component } from "react";
import RecipeManager from "../../modules/RecipeManager"

// Need to add the name of the recipe you are currently inputting details for at the top of the page.


export default class RecipeDetailsForm extends Component {

    state = {
        recipeId: "",
        ingredients: "",
        directions: "",
        recipe: "",
        userId: "",
        userEditedDirection: "",
        IngredientToEdit: {},
        DirectionToEdit: {},
        userEditedIngredient: ""
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewIngredient = evt => {
        evt.preventDefault();
        if (this.state.ingredients === "") {
            window.alert("Please enter your ingredients");
        }
        else {
            const ingredient = {
                ingredient: this.state.ingredients,
                recipeId: this.props.match.params.recipeId
            };
            this.props.addIngredient(ingredient)
                .then(this.setState({ ingredients: "" }))
                .then()
        }
    };

    constructNewDirection = evt => {
        evt.preventDefault();
        if (this.state.directions === "") { window.alert("Please enter your directions"); }

        else {
            const direction = {
                direction: this.state.directions,
                recipeId: this.props.match.params.recipeId
            };
            this.props.addDirection(direction)
                .then(this.setState({ directions: "" }))
                .then()
        }
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

      };

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

    refresh = evt => {
        evt.preventDefault();
        this.props.returnToLibrary();
        this.props.history.push("/recipes")

    }

    componentDidMount() {
        RecipeManager.getOneRecipe(this.props.match.params.recipeId).then(recipe => {
            this.setState({
                recipe: recipe.name,
                recipeId: recipe.Id
            });
        });
    };

    render() {
        return (
            <React.Fragment>{/* INPUT FIELD FOR INGREDIENT */}
                <form className="recipeDetailsForm">
                    <div className="form-group">
                        <label htmlFor="ingredient">Ingredients</label>
                        <ul className="IngredientList">
                            {this.props.ingredients.map(singleIngredient => {
                                if (singleIngredient.recipeId === this.props.match.params.recipeId){
                                    if (singleIngredient.id === this.state.IngredientToEdit.id) {
                                        return <div key={this.state.IngredientToEdit.id}><input
                                            type="text"
                                            required
                                            className="form-control"
                                            onChange={this.handleFieldChange}
                                            // This is creating an object in state,
                                            id="userEditedIngredient"
                                            placeholder={this.state.IngredientToEdit.ingredient}
                                            // value={this.state.messageToEdit.message}
                                        />
                                            <button
                                                type="submit"
                                                onClick={this.editIngredient}
                                                className="btn btn-primary"
                                            >Submit New Edit</button></div>
                                      } else {
                                      return <p className={singleIngredient.id} key={singleIngredient.id}>{singleIngredient.ingredient}
                                      <button
                                      type="submit"
                                      onClick={() => this.generateIngredientForm(singleIngredient)}
                                      className="btn btn-primary">
                                      Edit</button></p>
                                    }

                            } else {
                                return null
                            }
                            })}
                        </ul>
                        <input
                            type="text"
                            required
                            className="form-control ingredient-input"
                            onChange={this.handleFieldChange}
                            value={this.state.ingredients}
                            id="ingredients"
                            placeholder="example: 1 cup of cheese"
                        />
                        <button
                            type="submit"
                            onClick={this.constructNewIngredient}
                            className="btn btn-primary"
                        >Next Ingredient</button>
                    </div>
                    {/* Input field and button for directions */}
                    <div className="form-group">
                        <label htmlFor="direction">Directions</label>
                        <ul className="DirectionsList">
                            {this.props.directions.map(singleDirection => {
                                if (singleDirection.recipeId === this.props.match.params.recipeId){if (singleDirection.id === this.state.DirectionToEdit.id) {return <div key={this.state.DirectionToEdit.id}><input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                // This is creating an object in state,
                                id="userEditedDirection"
                                placeholder={this.state.DirectionToEdit.direction}
                                // value={this.state.messageToEdit.message}
                            />
                                <button
                                    type="submit"
                                    onClick={this.editDirection}
                                    className="btn btn-primary"
                                >Submit New Edit</button></div>} else {
                                return <li className={singleDirection.id} key={singleDirection.id}>{singleDirection.direction}<button
                                type="submit"
                                onClick={() => this.generateDirectionForm(singleDirection)}
                                className="btn btn-primary">
                                Edit</button></li>
                              }
                            }
                            else {
                                return null
                            }
                            })}
                        </ul>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            value={this.state.directions}
                            id="directions"
                            placeholder="ex. Preheat oven to 450 degrees"
                        />
                        <button
                            type="submit"
                            onClick={this.constructNewDirection}
                            className="btn btn-primary">
                        Next Direction</button>
                        <div className="returnButton">
                        <button
                            type="submit"
                            onClick={() =>
                                this.props
                                .deleteRecipe(this.props.match.params.recipeId)
                                .then(() => this.props.history.push("/recipes"))
                                    }
                              className="btn btn-primary">Cancel Recipe</button>
                        <button
                            type="submit"
                            onClick={this.refresh}
                            className="btn btn-primary"
                        >Submit Recipe</button>
                        </div>
                    </div>
                </form>
            </React.Fragment>

        );
    }
}