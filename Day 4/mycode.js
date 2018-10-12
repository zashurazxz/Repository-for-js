// var square = document.getElementById("square");
// square.style.position = "absolute";
// square.style.left = "100px";
// square.style.top = "100px";

// function thisisatest(){
//     alert("this is interesting");
// }
// setTimeout(thisisatest, 2000);
// clearTimeout(thisisatest);

function time() {
    var today = new Date();
    var grabid = document.getElementById("tick")
    grabid.innerHTML= today
    console.log(today)
}
var intervals = setInterval(time, 1000);
// clearInterval(intervals)


// instructor code
// function updateTime() {
//     document.getElementById("output")
//     .innerHTML = new Date();
// }
// setInterval(updateTime, 1000);


var walkforwards = true;
// var walkupwards = true;
function catWalk() {
    var img = document.getElementById ("cat");
    var currentLeft = parseInt(img.style.left);
    var currentup = parseInt(img.style.bottom);
    var direction = 10

    if (walkforwards && (currentLeft > (window.innerWidth-img.width))){
        walkforwards = false;
    }
    if (!walkforwards && (currentLeft <= 0)){
        walkforwards = true;
    }
    if (walkforwards){
        img.style.left = (currentLeft + direction) + "px";
    } else {
        img.style.left = (currentLeft - direction) + "px";
    }

    // if (walkupwards && (currentup > (window.innerHeight-img.height))){
    //     walkupwards = false;
    // }
    // if (!walkupwards && (currentup <= 0)){
    //     walkupwards = true;
    // }
    // if (walkupwards){
    //     img.style.bottom = (currentup + direction) + "px";
    // } else {
    //     img.style.bottom = (currentup - direction) + "px";
    // }
}
setInterval(catWalk, 40);


var button = document.getElementById("mybutton");
button.addEventListener("mouseover", function(event){
    event.target.style.color = "purple"
    setTimeout(function() {
        event.target.style.color = "black";
    }, 800);
}, false);
// button.addEventListener("mouseout", function(event){
//     event.target.style.color = "black";
//     setTimeout(function() {
//         event.target.style.color = " ";
//     },1);
// }, false);
function welcome (event){
    alert("whats up")
}
var buttone = document.getElementById("mebutton")
var buttone = document.getElementById("mebutton");
var welcomeme = function (event) {
    alert("how are you ?");
};
// buttone.addEventListener("mouseover", welcomeme)
// buttone.addEventListener("mouseover", function(event) {
buttone.addEventListener("click", function(event) {
   buttone = event.currentTarget;
   buttone.style.backgroundColor = "blue";
   buttone.innerHTML = "clicked";
});



var link = document.getElementById("saitlink");

link.addEventListener("click", function(event){
    event.preventDefault();
    alert("THERE IS AN ERROR")
});

