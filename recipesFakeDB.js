let recipes = [
  {
    id: 1,
    name: "Coffee Rubbed Steak Tacos",
    instructions:
      "Instructions: Rub steak with coffee grounds and olive oil, sear over high heat, serve on tortilla with grilled peppers.",
    img:
      "https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_500,q_auto,w_1900/hellofresh_s3/image/coffee-rubbed-steak-tacos-c010916c.jpg",
    cookTime: 30
  },
  {
    id: 2,
    name: "Fist Tacos",
    img:
      "https://natashaskitchen.com/wp-content/uploads/2017/08/Easy-Fish-Tacos-with-the-Best-Fish-Taco-Sauce-4-600x900.jpg",
    instructions:
      "To assemble: start with the fish then add remaining ingredients finishing off with a generous sprinkle of cotija cheese and finally that awesome taco sauce! Serve with a fresh lime wedge to squeeze extra lime juice over tacos.",
    cookTime: 45
  },
  {
    id: 3,
    name: "Fluffy Japanese Pancakes",
    instructions: "Make meringue, mix ingredients, cook",
    img:
      "https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_500,q_auto,w_1900/hellofresh_s3/image/coffee-rubbed-steak-tacos-c010916c.jpg",
    cookTime: 40
  },
  {
    id: 4,
    name: "Pork Tenderloin",
    instructions:
      "Let tenderloin sit in a covered dish for 8hrs w/ generous amount of salt in the pan. Pan sear it until golden brown all around. Bake in the oven for 30-40 min with cut up apples and lemons and paprika over it. After baking, pan sear till edges are crispy. Serve with potatoes or fries.",
    img:
      "https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18121505/051146047-01-garlic-fennel-pork-tenderloin-recipe-main.jpg",
    cookTime: 60
  },
  {
    id: 5,
    name: "Steak au Poivre",
    instructions: "cook steak, a lot of pepper, cognac cream and delicious.",
    img:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/12/6/0/CC-alton-brown_steak-au-poivre-recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371602797531.jpeg",
    cookTime: 53
  }
];

function setId() {
  const previousHighestId = recipes[recipes.length - 1].id;
  return previousHighestId + 1;
}

module.exports = { recipes, setId };
