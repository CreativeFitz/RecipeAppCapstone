import React, { Component } from 'react';
import RecipeCard from "../RecipeLibrary/RecipeCard";

export default class Meals4Week extends Component {
    render() {
        return (
            <div>
                <h1>Meals For the Week</h1>
                <section className="recipes">
        {this.props.recipes.map(singleRecipe => {
            if  (singleRecipe.userId === parseInt(sessionStorage.getItem(`credentials`))
            && singleRecipe.prepped === true)
            { return <RecipeCard key={singleRecipe.id} recipe={singleRecipe} />
         }
        else { return null }})}
        </section>

            </div>
        );
    }
}