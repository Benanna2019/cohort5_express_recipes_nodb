const recipes = require("./recipesFakeDB");
const express = require("express");
const PORT = 4000;

const app = express();

// console.log(app);

app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
