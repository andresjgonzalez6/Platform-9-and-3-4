let expect = require("chai").expect;
let goodstuff = require("../routes/edeamAPI");
goodstuff.recipeSearch();

describe("recipeSearch", function () {
    it("should be able to run", function () {
        expect(true).to.be.true;
    })
});