let { recipes, setId } = require("./recipesFakeDB");
const express = require("express");
const { filter, map } = require("ramda");
const PORT = 4000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.post("/recipe", (request, response) => {
  try {
    console.log("POST A RECIPE");
    console.log(request.body);
    //recv request: name,img,instructions,cookTime
    const name = request.body.name;
    const img = request.body.img;
    const instructions = request.body.instructions;
    const cookTime = request.body.cookTime;
    //push id,name,img,instructions,cookTime to the recipes db
    recipes.push({ id: setId(), name, img, instructions, cookTime });
    response.status(201).send(recipes);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.put("/recipe", (request, response) => {
  try {
    console.log("UPDATE A RECIPE");
    const id = request.query.id;
    const name = request.body.name;
    const img = request.body.img;
    const instructions = request.body.instructions;
    const cookTime = request.body.cookTime;

    // let tempRecipe = filter(recipe => recipe.id == id, recipes);
    let tempRecipe = {};
    console.log("here");
    tempRecipe.name = name;
    tempRecipe.img = img;

    tempRecipe.instructions = instructions;
    tempRecipe.cookTime = cookTime;
    tempRecipe.id = Number(id);

    // console.log(tempRecipe, "tempRecipe");

    recipes = map(
      recipe => (recipe.id == tempRecipe.id ? tempRecipe : recipe),
      recipes
    );

    // let tempRecipes = map(
    //   recipe => (recipe.id == tempRecipe.id ? tempRecipe : recipe),
    //   recipes
    // );

    // recipes = [...tempRecipes];

    // console.log(recipes);
    response.status(200).send(recipes);
  } catch (error) {
    console.log(error);
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
