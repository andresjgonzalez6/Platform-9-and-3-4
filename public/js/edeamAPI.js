// var mysql = require('mysql');

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: "edemamDB"
// });




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
                console.log(res);
                for (let i = 0; i < res.hits.length; i++) {
                    let imageUrl = res.hits[i].recipe.image;
                    console.log(imageUrl);
                    let recipeName = res.hits[i].recipe.label;
                    console.log(recipeName);
                    for (let i = 0; i < res.hits[i].recipe.healthLabels.length; i++) {
                        let healthDietLabels = res.hits[i].recipe.healthLabels[i];
                        console.log(healthDietLabels);
                    }

                    for (let i = 0; i < res.hits[i].recipe.ingredientLines.length; i++) {
                        let ingrLines = res.hits[i].recipe.ingredientLines[i];
                        console.log(ingrLines);
                    }

                    let shareAsLink = res.hits[i].recipe.shareAs;
                    console.log(shareAsLink);
                }
                console.log(res);
            });
    },
    // nutritionSearch: function (query) {
    //     let nutURL = "https://api.edamam.com/api/nutrition-data?app_id=" + Nutrition_APP_ID + "&app_key=" + Nutrition_APP_KEY + "&ingr=" + query;
    //     $.ajax({
    //         url: nutURL,
    //         method: "GET"
    //     })
    //         .then(function (res) { console.log(res); })
    // },

    // foodDBAPI: function (query) {
    //     let foodURL = "https://api.edamam.com/api/food-database/parser?ingr=" + query + "&app_id=" + FoodDB_APP_ID + "&app_key=" + FoodDB_APP_KEY;
    //     $.ajax({
    //         url: foodURL,
    //         method: "GET"
    //     })
    //         .then(function (res) { console.log(res); })
    // }
}

$('#search-button').on('click', function (event) {
    event.preventDefault();
    let query = $("#search-input").val();
    goodStuff.recipeSearch(query);
    // goodStuff.nutritionSearch(query);
    // goodStuff.foodDBAPI(query);
    console.log(query);

});
