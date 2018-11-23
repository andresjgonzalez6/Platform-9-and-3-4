require('dotenv').config();

let Recipe_APP_ID = process.env.Recipe_APP_ID
let Recipe_APP_KEY = process.env.Recipe_APP_KEY
let Nutrition_APP_ID = process.env.Nutrition_APP_ID
let Nutrition_APP_KEY = process.env.Nutrition_APP_KEY
let FoodDB_APP_ID = process.env.FoodDB_APP_ID
let FoodDB_APP_KEY = process.env.FoodDB_APP_KEY
let query;
let goodStuff = {
    recipeSearch: function () {
        let url = "https://api.edamam.com/search?q="+query+"&app_id=${"+Recipe_APP_ID+"}&app_key=${"+Recipe_APP_KEY+"}"
    },
    nutritionSearch: function () {},

    foodDBAPI: function () {}
}

module.exports = goodStuff;