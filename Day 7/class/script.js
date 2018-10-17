// localStorage.setItem("user", "jannessa")
// // localStorage.firstname = "jannessa";

// localStorage.setItem("user name", "alice");
// var name = localStorage.user;
// console.log(name);
// localStorage.removeItem("user");
// localStorage.user = null;
// localStorage.clear();



// localStorage.setItem("username", "Xman");

// var name = localStorage.getItem("username");

// localStorage.removeItem("username");
// // console.log(name)

// // localStorage.age = 35;
// // var age = localStorage.age;
// // typeof age;

// var janedoe = {
//     firstname: "jane",
//     lastname: "doe",
//     age: 35
// };
// localStorage.person = JSON.stringify(janedoe);
// var savedperson = JSON.parse(localStorage.person);
// console.log(janedoe)

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach(item => {
  liMaker(item);
});

button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});