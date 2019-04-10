import React, { Component } from "react";

export default class IngredientsList extends Component {
  render() {
    console.log(this.props.meals4Week, "hello")

   const mealsPrepped = this.props.meals4Week.filter((recipe) =>{ return recipe.userId === parseInt(sessionStorage.getItem(`credentials`));})
   .map((recipe) => {
       return recipe.ingredients
   })
   .flat()



   console.log(mealsPrepped)






    return (
      <React.Fragment>
        <section className="ingredientsList">
        <ul>
        {mealsPrepped.map((ingredients) => {
            return <li key={ingredients.id}>{ingredients.ingredient}</li>
        })}
        </ul>

        </section>
      </React.Fragment>
    );
  }
}