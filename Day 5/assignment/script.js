function shows_form_part(n){
    var i = 1, p = document.getElementById("form_part"+1);
    while (p !== null){
        if (i === n){
            p.style.display = "";
        }
        else{
            p.style.display = "none";
        }
        i++;
        p = document.getElementById("form_part"+i);
    }
}

function submit_form() {
	// var sum = parseInt(document.getElementById("num1").value) +
    //         parseInt(document.getElementById("num2").value) +
    //         parseInt(document.getElementById("num3").value) +
    //         parseInt(document.getElementById("num4").value) +
    //         parseInt(document.getElementById("num5").value) +
    //         parseInt(document.getElementById("num6").value);
  alert("Your result is: " + 100);
}