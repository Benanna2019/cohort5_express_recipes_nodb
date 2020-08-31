const recipes = require("./recipesFakeDB");
const express = require("express");
const { filter } = require("ramda");
const PORT = 4000;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/recipes", (request, response) => {
  try {
    console.log("success!");
    response.status(200).send(recipes);
  } catch (error) {
    console.log("failure!");
    response.status(500).send(error);
  }
});

app.get("/recipe", (request, response) => {
  try {
    console.log("success!");
    console.log(request.query);
    const filterer = recipe => recipe.id == request.query.id;
    response.status(200).send(filter(filterer, recipes));
  } catch (error) {
    console.log("failure!");
    response.status(500).send(error);
  }
});

app.get("/recipes_by_time", (request, response) => {
  try {
    console.log("RECIPES BY TIME");
    const filterer = recipe => recipe.cookTime <= request.query.time;
    response.status(200).send(filter(filterer, recipes));
  } catch (error) {
    response.status(500).send(error);
  }
});

app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
