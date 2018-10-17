// fetch("https://jsonplaceholder.typicode.com/users")
// .then(function(response){
//     return response.json();
// })
// .then (function(data){
//     for (var i=0; i < data.length; i++){
//         console.log(data[i].username);
//     }
// })

// var content = {
//     title: "wow",
//     body: "this is amazing",
//     userId: 100,
//     username: "BoB"
// }

// function sendData(url){
//     fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(content)
//     })
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data)
//     })
// }
// sendData("https://jsonplaceholder.typicode.com/users");

// fetch("https://jsonplaceholder.typicode.com/404")
// .then(function(response){
//     if(!response.ok){
//         throw Error(response.statusText);
//     }
//     return response.json();
// })
// .then(function(data){
//     console.log(data)
// })
// .catch(function(error){
//     console.log(error);
// })

fetch("https://api.github.com/users/zashurazxz")
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
})

fetch("https://api.github.com/users/zashurazxz/repos")
.then(function(response){
    return response.json();
})
 .then (function(data){
    for (var i=0; i < data.length; i++){
        console.log(data[i].name);
    }
})
