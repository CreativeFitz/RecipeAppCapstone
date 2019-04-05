import React, { Component } from "react";
import RecipeManager from "../../modules/RecipeManager"

// Need to add the name of the recipe you are currently inputting details for at the top of the page.


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
                                return <p className={singleIngredient.id} key={singleIngredient.id}>{singleIngredient.ingredient}</p>
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
                                if (singleDirection.recipeId === this.props.match.params.recipeId){
                                return <p className={singleDirection.id} key={singleDirection.id}>{singleDirection.direction}</p>
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