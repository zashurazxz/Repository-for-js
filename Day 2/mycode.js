var TimesTable = 1
while (TimesTable < 13) {
    console.log("9 * " +TimesTable + " = " +9*TimesTable);
    TimesTable = TimesTable + 1;
}


var TimesTable = 1
while (TimesTable < 13) {
    var counter = 1;
    while (counter < 10){
    console.log(counter + " x " + TimesTable + " = " + counter*TimesTable);
    counter++;
    }
    TimesTable = TimesTable + 1;
}


for (var i = 9; i <= 108; i++) {
    if (i % 9 === 0){
    console.log(i);}
}
// instructor code
// for (var num = 1; num <= 12; num++){
//     console.log("9 x " + num + " = " + 9*num);
// }


for (var i = 1; i <= 12; i++) {
    for (var j = 1; j <= 12; j++){
    console.log(j + " x " + i + " = " + i*j);}
}
// instructor code
// for (var num = 1; num <= 12; num++){
// for (var counter = 1; counter <=12; counter++){
//     console.log(counter " x " + num + " = " + counter*num);    
// }
// }


for (var i =1; i <= 20; i++) {
    if (i % 2 === 0){
        console.log( i + " is even");
    } else{
        console.log(i + " is odd");
    }
}


for (var i = 1; i <= 12; i++) {
    for (var j = 1; j <= 12; j++){
    console.log(j + " x " + i + " = " + i*j);
    if (j % 8 == 0){
        console.log("i Love the number " + j);
        break;
    } else if (i % 8 == 0){
        console.log("this is an " + i + " too");
        break;
    }
}
}
// instructor code
// for (var i = 1; i <= 12; i++){
//     if (i === 6) {
//         console.log("i hate the number 6");
//         break;
//     }
//     console.log(9*i);
// }

var favoritefoods = ["pizza, ", "chicken, ", "spaghetti, ", "icedcream, ", "french fries, "];
var thirdfood = favoritefoods[2];
favoritefoods[2] = "anything except asparagus";
favoritefoods.push("candy, ");
for(var i = 0; i <favoritefoods.length; i++){
    document.write(favoritefoods[i]);
}
console.log(favoritefoods);
console.log(favoritefoods.length);
console.log(thirdfood);


var recipe = {
    recipeTitle: "The Great Muffin",
    recipeDescription: "The Great Muffin, Truly what a sight to behold",
    ingredients: ["sugar","spice","everything nice","chemical X"],
    directions: "just do it",
    rating: "4/5",
    cooktime: {minutes: 45},

    letscook: function() {
        console.log(" I'm hungry! Lets cook.." + recipe.recipeTitle)
    }
};
recipe.Servings = "3";
recipe.rating = "5/5";
delete recipe.cooktime;
var recipetitle = recipe["recipeTitle"];
console.log(recipetitle);


function recipelist(list) {
    console.log("the title is " + list.recipeTitle + " the recomended servings for this recipe is " + list.Servings);
}
recipelist(recipe);

recipe.letscook();



var movies = [
    {moviename: "Harry Potter", movierating:" 5 Stars"},
    {moviename: "Iron Man", movierating: " 3 Stars"}
];
for(var i = 0; i <movies.length; i++){
    var movie = movies[i];
    console.log("I give " + movie.moviename + movie.movierating);
}


var listoffilms = ["one","two","three","four","five","six"]
var listofbooks = ["one","two","three","fourteen","five","sixteen","seventeen","eighteen"]
console.log("the list of films is " + listoffilms.length + " things long");
console.log("the list of books is " + listofbooks.length + " things long");
var moviesandbooks = listoffilms.concat(listofbooks)
console.log(moviesandbooks)
var movieswithlongtitles = moviesandbooks.filter(a=>a.length>6);
console.log(movieswithlongtitles)
console.log(moviesandbooks)

var pi = Number(3.14159);
pi=pi.toFixed(2);
console.log(pi);

var today = new Date("10 october 2018");
var day = today.getDay();
console.log(day);
var dayofweek=function(day){
    switch(day){
        case 0:
            return "sunday"    
        case 1:
            return "monday"
        case 2:
            return "tuesday"
        case 3:
            return "wednesday"
        case 4:
            return "thursday"
        case 5:
            return "friday"
        case 6:
            return "saturday"
}
}
console.log(dayofweek(day));


var randomNumber = function(){
    var randomNumber=Math.random() 
    return Math.trunc(Math.ceil(randomNumber*100))
}
console.log(randomNumber())
var randompi= randomNumber() * (Math.PI)
console.log(Math.round(randompi));


