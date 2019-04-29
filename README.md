# Bon-APP-eptite

I built this app to help grocery shoppers/cooks optimize their time by being able to pick the recipes
they want to prep for the coming week while also building a simplified grocery list. It also acts as a storage app for all your recipes. It does require users to transcribe from their physical recipe cards to the online app but it will save time when retrieving the directions later on and allows customization to recipes based on taste of past
experiences.

### Deployed Bon-App-eptite URL - <http://bfrecipeapp.herokuapp.com>

## Login/Register
![NewUser] (src/components/Readme/NewUser.png)




When you first arrive at the landing page of Bon-APP-etite, if you are completely new to using the app then you will want to use the register process shown above. If you have already used the app once before then click login.

## Recipe Library

![NewLibrary] (src/components/Readme/NewLibrary.png)

Once you have logged in to the app you will land on the Recipe Library page. This is the page where all your newly created recipes will show and also the page where you can begin creating a new recipe. When you want to create a new recipe click on the "New Recipe" button.

## Recipe Creation

![NewLibrary] (src/components/Readme/RecipeNameAndImage.png)

You first see a form to input the name of the recipe you are creating and also an input field to input the URL of the image you are wanting to use to represent this recipe card later on. Once you are finished click on "Submit Recipe Name."

![DirectionsAndIngredients] (src/components/Readme/RecipeDirectionsAdded.png)

This will take you to the final entry form for your recipe. This form allows you to add ingredients and directions needed for the recipe. It also give you the ability to edit and delete ingredients/directions in the instance that you add the wrong instruction. You can also click the "Cancel Recipe" to completely git rid of your current creation.

![NewLibrary] (src/components/Readme/NewLibrary.png)

Once you submit your recipe you will be brought back to the "Recipe Library" page where it should now show you your new recipe. From here you can click on the recipe details to view all the information you have entered. You also have the ability to click on edit which will take you back to the form where you originally entered the ingredients and directions. This will allow the user to change information within the recipe later on.

## Meals For The Week

![MealsForTheWeek] (src/components/Readme/Meals4Week.png)

By going to the details of a recipe from "Recipe Library" you will have the option to click on "Add To This Weeks Meals". By clicking this you will now see the recipes under the "Meals For The Week" page. This will remind the user what meals they are prepping to cook coming up. They can also remove them from this list as well by clicking the "Remove From This Weeks Meals" button on this page.

## Ingredients List

![GroceryList] (src/components/Readme/GroceryList.png)

The "Ingredients List" page generates a grocery list for the user based on the recipes they have selected to cook for the coming week. It will pull all the ingredients from the meals they have added to "Meals For The Week" and combine them together into one list.


## Install

You will need to fork and pull down repository from https://github.com/CreativeFitz/RecipeAppCapstone to a local branch. Then install the following:

```
npm install react
npm install react-router-dom
   ```

## Auth0

Because Bon-APP-etite uses Auth0 for its sign-in/registration you will need to visit https://auth0.com/ and create an account. You will need to retrieve a domain address and client Id from the Auth0 website. Once you have these you will create an AuthConfig.js file in the Authentication folder of the app and add the following code:

```
export default {
    domain: 'YOUR DOMAIN',
    clientId: 'YOUR CLIENT ID'
   }
   ```
Replace with your domain address and client Id.

## Running the App

Once you have npm installed everything and added your Auth0 info then you just need to pull up two terminals. In one you need to run :
```
json-server -p 5002 -w api/database.json
```
and in the other terminal at the root folder of the app run:

```
npm start
```



