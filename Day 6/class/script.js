console.log ($("p"));

console.log($("#center"));

console.log($(".main"));

console.log($("#parent .child"));

// $("a").html("yahoo!")
$("a").attr("href", "https://www.youtube.com/watch?v=QLvvkTbHjHI")
$("a").css({color: "purple"})

var links = $("a");
links.each(function(){
    var link = $(this);
    link.text(link.text() + "!");
});

$(function(){

});

$(document).ready(function(){
 var links = $("a");

 links.each(function(){
     var link = $(this);
     link.text(link.text() + "!");
 });
});


function clickhandler(){
    console.log("wow");
}
$("#button").on("click", clickhandler);

$("#button").on("click", function(){
    console.log("clicked");
});

$("body").on("keypress", function(event){
    console.log(event);
    console.log(event.which);
    console.log(event.target);

});

$("form").on("submit", function(event){
    event.preventDefault();
    console.log("not submitting the form")
});

$("#error").toggle(1000);
$("#error").hide();
$("error").fadeIn(1000);
$("error").show(1000, function(){
    $(this).addClass("alert")
});
banner.css("color","red").html("welcome").show();
banner.css("color","red")
.html("welcome")
.show()

