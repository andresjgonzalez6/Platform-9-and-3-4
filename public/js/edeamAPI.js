let Recipe_APP_ID = "055b5671";
let Recipe_APP_KEY = "1502e188414b9f8a78b54045f49fe008";
let Nutrition_APP_ID = "cd84f084";
let Nutrition_APP_KEY = "5913f23d52bd629ff917b766ac7eee62";
let FoodDB_APP_ID = "2d32703d";
let FoodDB_APP_KEY = "4638b7482a7a3cdcbcad3726aabf4fdb";
let image;
let goodStuff = {
    recipeSearch: function (query) {
        let recipeURL = "https://api.edamam.com/search?q=" + query + "&app_id=" + Recipe_APP_ID + "&app_key=" + Recipe_APP_KEY;
        $.ajax({
            url: recipeURL,
            method: "GET"
        })
            .then(function (res) {
                for (let i = 0; i < res.hits.length; i++) {
                    images = res.hits[i].recipe.image
                    name = res.hits[i].recipe.label
                    calories = res.hits[i].recipe.calories
                    for (let j = 0; j < res.hits[i].recipe.ingredientLines.length; j++) {
                        ingredients = res.hits[i].recipe.ingredientLines[j]
                    }
                    for (let k = 0; k < res.hits[i].recipe.healthLabels.length; k++) {
                        healthLabels = res.hits[i].recipe.healthLabels
                    }
                }
                console.log(res);
            });
    },
    nutritionSearch: function (query) {
        let nutURL = "https://api.edamam.com/api/nutrition-data?app_id=" + Nutrition_APP_ID + "&app_key=" + Nutrition_APP_KEY + "&ingr=" + query;
        $.ajax({
            url: nutURL,
            method: "GET"
        })
            .then(function (res) { })
    },

    foodDBAPI: function (query) {
        let foodURL = "https://api.edamam.com/api/food-database/parser?ingr=" + query + "&app_id=" + FoodDB_APP_ID + "&app_key=" + FoodDB_APP_KEY;
        $.ajax({
            url: foodURL,
            method: "GET"
        })
            .then(function (res) { })
    }
}

$('#search-button').on('click', function (event) {
    event.preventDefault();
    let query = $("#search-input").val();
    goodStuff.recipeSearch(query);
    console.log(query);

});
