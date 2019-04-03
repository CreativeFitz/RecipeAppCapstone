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
      ) || {};

    return (
      <section className="animal">
        <div key={animal.id} className="card">
          <div className="card-body">
            <h4 className="card-title">
              <img src={dog} className="icon--dog" />
              {animal.name}
            </h4>
            <h6 className="card-title">{animal.breed}</h6>
            <button
              href="#"
              className="btn btn-danger"
              onClick={() =>
                this.props
                  .deleteAnimal(animal.id)
                  .then(() => this.props.history.push("/animals"))
              }
            >
              Delete
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                this.props.history.push(
                  `/animals/${animal.id}/edit`
                );
              }}
            >
              Edit
            </button>
          </div>
        </div>
      </section>
    );
  }
}