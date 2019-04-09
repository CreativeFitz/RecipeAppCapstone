const remoteURL = "http://localhost:5002"
const ingredientAPIManager = {
    getAllIngredients: () => {
        return fetch("http://localhost:5002/ingredients")
        .then(ingredients => ingredients.json());
    },
    getOneIngredient: (id) => fetch(`${remoteURL}/ingredients/${id}`).then(ingredient => ingredient.json()),
    put(editedIngredient) {
      return fetch(`${remoteURL}/ingredients/${editedIngredient.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editedIngredient)
      }).then(data => data.json());
    },
    deleteIngredient: (id) => {
        return fetch(`http://localhost:5002/ingredients/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json()
        );
    },
    postIngredient(newIngredient) {
        return fetch(`${remoteURL}/ingredients`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newIngredient)
        }).then(data => data.json())
      },
      ingredientsByRecipe: () => {return fetch(`${remoteURL}/messages?_expand=user`)
      .then(ingredient => ingredient.json())
  }
};

export default ingredientAPIManager;