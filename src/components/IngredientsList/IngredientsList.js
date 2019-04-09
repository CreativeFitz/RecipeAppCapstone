import React, { Component } from "react";

export default class IngredientsList extends Component {
  render() {

   const mealsPrepped = this.props.meals4Week.filter(recipe=> recipe.id === parseInt(sessionStorage.getItem(`credentials`)));
   console.log(mealsPrepped);

    return (
      <React.Fragment>
        <section className="ingredientsList">
        {/* {this.props.meals4week.filter(recipe => {
        else { return null }})} */}
        </section>
      </React.Fragment>
    );
  }
}