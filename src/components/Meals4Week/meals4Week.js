import React, { Component } from 'react';
import RecipeCard from "../RecipeLibrary/RecipeCard";
import "./meals4Week.css"

export default class Meals4Week extends Component {
    render() {
        return (
            <div className="recipesContainerParent">
            <div className="recipesContainer">
                <h1 className="meals4Week">Meals For the Week</h1>
                <section className="recipes">
        {this.props.recipes.map(singleRecipe => {
            if  (singleRecipe.userId === parseInt(sessionStorage.getItem(`credentials`))
            && singleRecipe.prepped === true)
            { return <div><RecipeCard key={singleRecipe.id} recipe={singleRecipe} />
            <button
            onClick={() => this.props.recipeChecked({ prepped: false}, singleRecipe.id)
            .then(this.props.recipePrep)
            }>Remove From This Weeks Meals</button></div>
         }
        else { return null }})}
        </section>

            </div>
            </div>
        );
    }
}