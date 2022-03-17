// typescript
var title = "casino royale";
var studio = "eon production,christ gopi studio";
var ratting = "12fe";
//console.log(title,studio,ratting)
var movies = /** @class */ (function () {
    function movies(title, studio, ratting) {
        this.titl = title;
        this.stu = studio;
        this.rat = ratting;
    }
    movies.prototype.ans = function () {
        console.log(this.titl, this.stu, "PG" + this.rat);
    };
    return movies;
}());
var obj = new movies(title, studio, ratting);
obj.ans();
