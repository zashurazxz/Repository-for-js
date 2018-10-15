// var myform = document.getElementById("myform")
// var myform = document.myform;
// var formslist = document.forms;
// var firstfrom = document.forms[0];

// var email = document.myform.email;
// var email = document.myform.email.value;
// var firstname = document.myform["first name"];
// var firstname = document.myform["first name"].value;
// document.myform.email.type;
// document.myform.email.focus();
// // document.myform.email.blur();


// // create a list of checkboxes by using the checkbox name
// var checkboxList = document.myform.feature;
// var length = checkboxList.length;
// console.log(length);
// // loop through your checkbox
// for (var i = 0; i < checkboxList.length; i++) {
//     // if a checkbox is checked, console.log the value of the checkbox
//     if (checkboxList[i].checked) {
//         console.log(checkboxList[i].value);
//     }
// }

// var submitbutton = document.myform.submit;

// submitbutton.addEventListener("click", function(event){
//     event.preventDefault();

//     var name = document.myform["first name"].value;
//     console.log(name);
// })


// var submitbutton = document.getElementById("submitbutton");
// var errorname = document.getElementById("errorname");
// var errorage = document.getElementById("errorage");
// var erroryoung = document.getElementById("erroryoung");

// submitbutton.addEventListener("click", function(event){
//     errorname.style.display = "none";
//     errorage.style.display = "none";
//     erroryoung.style.dispaly = "none";

//     var name = document.form1.name.value;
//     var age = document.form1.textage.value;   

//     if (!name) {
//         event.preventDefault();
//         errorname.style.display ="block";
//     }
//     if (!age) {
//         event.preventDefault();
//         errorage.style.display ="block";
//     }
//     if (parseInt(age)<19){
//         event.preventDefault();
//         erroryoung.style.display = "block";
//     }
// })

// regexp constructor
var regEX1 = new RegExp ("abc");
// literal value
var regEx2 = /abc/;

console.log(/abc/.test("abcde")); 
// true
console.log(/abc/.test("abxde"));
// false

var regEx3 = new RegExp ("abc123");
console.log (/abc123/.test("abc123youandme"))

var regEx4 = new RegExp ("on");
console.log (/on/.test("corn"))
console.log (/on/.test("adorn"))
console.log (/on/.test("con"))
console.log (/on/.test("long"))
console.log (/on/.test("tron"))

