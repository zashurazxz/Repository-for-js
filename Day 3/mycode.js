// "use strict"
// // window.alert("hello");

// // history.length; how many pages are in the history stack 
// // history.back(); go back 1 page
// // history.forward(); go forward one page
// // history.go(-2); goes back 2 pages 
// // history.go(3); goes forward 3 pages

// // function locationHref() {
// //     location.href = "#top";
// // }
// // function locationReplace() {
// //     location.replace("#top");
// // }

// // console.log(navigator.userAgent);
// // console.log(navigator.vendor);
// // console.log(navigator.platform);

// function success(position) {
//     var latitude = position.coords.latitude;
//     var longitude = position.coords.longitude;
//     var altitude = position.coords.altitude;
//     document.write("latitude " + latitude + " longitude" + longitude);
//     document.bgColor = "tomato";
// }
// function geoError(errorObj) {
//     alert("oh dear something went very wrong thats terribly sad");
//     document.bgColor = "green";
// }
// navigator.geolocation.getCurrentPosition(success, geoError);
// if (navigator.geolocation){
//     // use geolocation
// }
// if (typeof navigator.geolocation != "wow you are using an older browser just upgrade already"){
//     // use geolocation
// }

// // screen.height;
// // screen.width;
// // screen.colorDepth;
// // screen.orientation;
// console.log(screen.height, screen.width, screen.colorDepth, screen.orientation)

// // document.images[0]; 1st image on the page
// // document.images.length; returns how many images are on the page
// // document.links.length; returns how many links are on the page

// var header = document.getElementById("header")
// console.log(header);

// var listitems = document.getElementsByTagName("li")
// for (var i = 0; i < listitems.length; i++) {
//     var listitem = listitems[i];
// }

// var listelements = document.getElementsByClassName(listitmes);
// var listelements = document.querySelectorAll("nav-items");
// var firstitem = document.querySelector("#header");
// console.log(listitems);

// console.log(listitems.classList);
// if (ex.classList)
    //ex.classList.add(className);
// else
    // ex.className =+ " " + className;

// var specificparagrapgh = document.getElementsByTagName("p")[1];


var imgKitten = document.getElementById("kittenPic")
imgKitten.getAttribute("src");
imgKitten.setAttribute("src", "http://placekitten.com/g/600/500")

document.getElementsByTagName("p");
var paragraphtwo = document.getElementsByTagName("p")[1];
console.log(paragraphtwo);
paragraphtwo.style.color = "springgreen";
paragraphtwo.innerHTML += " , more text in this paragraph cool"
var pagemain = document.getElementsByTagName("main")[0];
var newparagrapgh = document.createElement("p");
var paragraphtext = document.createTextNode("wow i wonder where this will show up");
newparagrapgh.appendChild(paragraphtext);
main.appendChild(newparagrapgh);
newparagrapgh.style.color = "slateblue"

