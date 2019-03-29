const remoteURL = "http://localhost:5002"
const recipeAPIManager = {
    getAllRecipes: () => {
        return fetch("http://localhost:5002/recipes")
        .then(recipes => recipes.json());
    },
    getOne: (id) => fetch(`${remoteURL}/recipes/${id}`).then(recipe => recipe.json()),
    put(editedRecipe) {
      return fetch(`${remoteURL}/recipes/${editedRecipe.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editedRecipe)
      }).then(data => data.json());
    },
    deleteRecipe: (id) => {
        return fetch(`http://localhost:5002/recipes/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json()
        );
    },
    postRecipe(newRecipe) {
        return fetch(`${remoteURL}/recipes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newRecipe)
        }).then(data => data.json())
      }
};

export default recipeAPIManager;