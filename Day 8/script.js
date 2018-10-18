// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i)

// let condition = true;
// if (condition) {
//     let a = "zeta";
//     console.log(a);
// }
// console.log(a);

// const arr = [1, 2, 3];
// const obj = { id: 0, name: "Alpha"};

// arr.push(4, 5)
// console.log (arr)

// const funcs = [];
// for (let i = 0; i < 3; i++){
//     funcs.push(function(){
//         console.log(i);
//     });
// }
// for (let j = 0; j <funcs.length; j++){
//     funcs[j]();
// }

// const sum = (num1, num2) =>  num1 + num2;
// console.log(sum(3, 4));

// const fibonacci = n => {
//     if (n < 3) {
//         return 1;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2); 
// }
// console.log(fibonacci(9));

// let multiply = (a, b=1) => a*b
// console.log(multiply(5,4));
// console.log(multiply (4));
// console.log(multiply());

// let product = (...array) => {
// console.log(array)
// }
// console.log(product(3, 4, 5));
// console.log(product(3, 4, 5, 6));
// console.log(product(1, 2, 3, 4, 5, 6));

// let join = (...list) => {
//     console.log(list)
// }
// join([1,2,3,4,5,6]);


// const user = {
//     name: "cody",
//     loginCount: 1,
//     goldstatus: true
// };

// const className = "container";
// // const html = '<div class="' + className + '">' + '<h2>welcome' + (user.goldstatus ? ' to our gold status member, ' : ', ') + user.name + '!' + '</h2>' + '<p>Today is' + new Date() + '</p>' + '<p>You have logged in ' + ++user.loginCount + ' times.</p>' + '</div>';
// // document.getElementById("target").innerHTML = html;
// converted
// const html = `<div class="${className}">
// <h2>welcome  ${(user.goldstatus ? ' to our gold status member, ' : ', ')}
//  ${user.name} ! </h2> 
// <p>Today is  ${new Date()} </p> <p>You have logged in ${++user.loginCount} times.</p>
// </div>`;
// document.getElementById("target").innerHTML = html;


// const myEmployee = {
//     active:true,
//     department: "engineering"
// };

// let isActiveEngineer = (employee) => {
//     const active = employee.active;
//     const department = employee.department;
//     return department === "engineering" && active;
// }
// console.log(`is myEmployee active ? ${isActiveEngineer(myEmployee) }`)
// converted
// let isActiveEngineer = (employee) => {
//     const {active, department} = employee;
//     return department === "engineering" && active;
// }
// console.log(`is myEmployee active ? ${isActiveEngineer(myEmployee) }`)


// var names = ["morgan", "taylor", "lesley"];
// for (var i=0; i <names.length; i++){
//     console.log(names[i]);
// }
// converted
// const names = ["morgan", "taylor", "lesley"];
// names.forEach((name, index, array) =>{
//     console.log(name);
// })


// const trips = [
//     { mph:10, hours:3},
//     { mph:30, hours:2},
//     { mph:25, hours:4}
// ];

// for (let i = 0; i <trips.length; i++){
//     console.log(trips[i].mph * trips[i].hours)
// }
// // converted
// const trips2 = [
//     { mph:10, hours:3},
//     { mph:30, hours:2},
//     { mph:25, hours:4}
// ];
// trips2.forEach((trip) =>{
//     console.log(trip.mph * trip.hours)
// });


// const availableLaptops = [
//     { name: 'MacBook', RAM: 8 },
//     { name: 'Asus', RAM: 32 },
//     { name: 'Lenovo', RAM: 16 },
//     { name: 'HP', RAM: 4 }];
//     allRAM = availableLaptops.every(laptop => laptop.RAM >=16);
//     someRAM = availableLaptops.some(laptop => laptop.RAM >=16);
//     console.log(allRAM)
//     console.log(someRAM)

// const groceries = [
//     { name: 'bananas', aisle: 'produce', price: 2 },
//     { name: 'flour', aisle: 'baking', price: 5 },
//     { name: 'avocados', aisle: 'produce', price: 4},
//     { name: 'lettuce', aisle: 'produce', price: 5 },
//     { name: 'olive oil', aisle: 'baking', price: 10 },
//     { name: 'shampoo', aisle: 'beauty', price: 12 }
// ];
// const produceLessThan5 = groceries.filter(cost => cost.price <5);
// console.log(produceLessThan5);


// const trips = [
//     { miles: 5, hours: 1},
//     { miles: 6, hours: 0.5},
//     { miles: 4, hours: 2 }
// ];
// const speeds = trips.map((speed) => speed.miles/speed.hours);
// console.log(speeds)


const posts = [
    {id: 23, title: 'Becoming an ES6 Wizard', body: 'Ille vivere. Ut ad te ...' },
    { id: 29, title: 'JavaScript Pro Tips', body: 'Pellentesque euismod ...' },
    { id: 31, title: 'Acing your next JS interview', body: 'Lorem ipsum dolor sitamet...'}
];
const currentId = 29;
const currentPost = posts.find(post => post.title === "JavaScript Pro Tips")
// const currentPost = posts.find(post => currentID === post.id)
console.log(currentPost.title);
console.log(currentPost.body);

const transactions = [5, 10, 15];
const sum = transactions.reduce(function(currentSum, number){
    return currentSum + number;
},0);
console.log(sum);

