const remoteURL = "http://localhost:5002"
const recipeAPIManager = {
    getAllRecipes: () => {
        return fetch(`${remoteURL}/recipes?_expand=user`)
        .then(recipes => recipes.json());
    },
    getOneRecipe: (id) => fetch(`${remoteURL}/recipes/${id}`).then(recipe => recipe.json()),
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
        return fetch(`${remoteURL}/recipes/${id}`, {
            method: "DELETE"
        })
        .then(() => fetch(`${remoteURL}/recipes`))
      .then(e => e.json());
  },
        // .then(e => e.json()
        // );
    // },
    postRecipe(newRecipe) {
        return fetch(`${remoteURL}/recipes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newRecipe)
        }).then(data => data.json())
      },
    patchRecipeCheck(id, checkedRecipe) {
  return fetch(`http://localhost:5002/recipes/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(checkedRecipe)
  }).then(data => data.json());
},
  recipesPrepped: () => {
    return fetch(`${remoteURL}/recipes?prepped=true&_embed=ingredients`)
    .then(recipes => recipes.json());
}
};

export default recipeAPIManager;