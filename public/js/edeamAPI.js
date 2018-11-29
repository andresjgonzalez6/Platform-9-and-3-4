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
                $("#results-section").empty();

                for (let i = 0; i < res.hits.length; i++) {
                    let recipeDiv = $("<div>");
                    recipeDiv.addClass("column is-4");
                    recipeDiv.attr("id", "recipeResult-" + i);
                    let recipeName = res.hits[i].recipe.label;
                    let imageUrl = res.hits[i].recipe.image;
                    let recipeImg = $("<img>");

                    let ul = $("<ul>");

                    for (let index = 0; index < res.hits[i].recipe.ingredientLines.length; index++) {
                        let ingrLines = res.hits[i].recipe.ingredientLines[index];
                        let li = $("<li>");
                        ul.append(li);
                        li.text(ingrLines);
                    }

                    let shareAsLink = res.hits[i].recipe.shareAs;
                    let imageLink = $("<a>");
                    imageLink.attr("href", shareAsLink);
                    imageLink.attr("target", "_blank");
                    recipeDiv.append(imageLink);
                    recipeImg.attr("src", imageUrl);
                    imageLink.append(recipeImg);


                    let labelH3 = $("<h3>");
                    labelH3.addClass("is-size-3");
                    let shareLink = $("<a>");
                    shareLink.attr("href", shareAsLink);
                    shareLink.attr("target", "_blank");
                    recipeDiv.append(shareLink);
                    shareLink.append(labelH3.text(recipeName));
                    recipeDiv.append(ul);

                    $("#results-section").append(recipeDiv);
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
