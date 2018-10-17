var walkForwards = true;
var left = {
    parseInt: "img.style.left"
}
localStorage.place = JSON.stringify(left);
var savedplace = JSON.parse(localStorage.place);
localStorage.setItem("currentLeft", "img.style.left")
var left2 = localStorage.getItem("currentLeft");
console.log(left2)

function catWalk() {
  var img = document.getElementById('cat');
  var currentLeft = parseInt(img.style.left);

  if (walkForwards && (currentLeft > (window.innerWidth-img.width))) {
    walkForwards = false;
  }

  if (!walkForwards && (currentLeft <= 0)) {
    walkForwards = true;
  }

  if (walkForwards) {
    img.style.left = (currentLeft + 10) + 'px';
  } else {
    img.style.left = (currentLeft - 10) + 'px';
  }
}
setInterval(catWalk, 50);

