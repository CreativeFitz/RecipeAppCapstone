import React, { Component } from "react";
import "./IngredientsList.css"

export default class IngredientsList extends Component {
  render() {
    console.log(this.props.meals4Week, "hello")

// Using "mealsPrepped" to break down nested arrays so that the ingredients can be mapped over.

   const mealsPrepped = this.props.meals4Week.filter((recipe) =>{ return recipe.userId === parseInt(sessionStorage.getItem(`credentials`));})
   .map((recipe) => {
       return recipe.ingredients
   })
   .reduce((acc, value) => acc.concat(value), []);



   console.log(mealsPrepped)





// Creating a container for the ingredientslist and mapping over returns from "mealsPrepped" to print all ingredients from meals in "Meals4Week" component
    return (
      <React.Fragment>
        <div className="listParentContainer">
        <div className="listContainer">
        <h1 className="listTitle">Grocery List</h1>
        <section className="ingredientsList">
        <ul>
        {mealsPrepped.map((ingredients) => {
            return <li key={ingredients.id}>{ingredients.ingredient}</li>
        })}
        </ul>

        </section>
        </div>
        </div>
      </React.Fragment>
    );
  }
}