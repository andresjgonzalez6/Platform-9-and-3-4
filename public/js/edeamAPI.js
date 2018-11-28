let app_id = "055b5671";
let app_key = "1502e188414b9f8a78b54045f49fe008";
let query = "biscuts";
let goodStuff = {
    recipeSearch: function (query) {
        let recipeURL = "https://api.edamam.com/search?q=" + query + "&app_id=" + app_id + "&app_key=" + app_key;
        $.ajax({
            url: recipeURL,
            method: "GET"
        })
            .then(function (res) {
                console.log(res);
            });
    },
    nutritionSearch: function () { },

    foodDBAPI: function () { }
}
goodStuff.recipeSearch(query);
