// $( "div" ).click(function() {
//   var color = $( this ).css( "background-color" );
//   $( "#result" ).html( "That Cube is <span style='color:" +
//     color + ";'>" + color + " color" + "</span>." );
// });


// $(document).ready(function() {
// 	$('#get-colors').click(function() {  
		
// 		//my colors array
// 		var colors = new Array();
		
// 		//get all elements
// 		$('*').each(function() {
// 			if($(this).css('background-color') && $(this).css('background-color') != 'transparent') { colors.push($(this).css('background-color')); }
// 			if($(this).css('color')) { colors.push($(this).css('color')); }
// 			if($(this).css('border-color')) { colors.push($(this).css('border-color')); }
// 		});
		
// 		//remove dupes and sort
// 		colors.sort();
		
// 		//create a color block for all of them
// 		jQuery.each(colors,function(it,value) {
			
// 			if(!$('div[rel=\'' + value + '\']').length)
// 			{
			
// 				//inject the wrapper
// 				var wrapper_id = 'w' + it;
// 				$('<div class="dwrapper" id="' + wrapper_id + '" rel="' + value + '"> </div>').appendTo('#colors-wrapper');
				
// 				//inject the color div
// 				$('<div class="dcolor" style="background-color:' + value + '"> </div>').appendTo('#' + wrapper_id);
				
// 				//inject text div
// 				$('<div class="text">' + value + '</div>').appendTo('#' + wrapper_id);
// 			}
			
// 		});
		
// 	});
// });


// // Returns a hex code for an attractive color
// console.log(randomColor()); 

// // Returns an array of ten green colors
// randomColor({
//    count: 10,
//    hue: 'green'
// });

// // Returns a hex code for a light blue
// randomColor({
//    luminosity: 'light',
//    hue: 'blue'
// });

// // Returns a hex code for a 'truly random' color
// randomColor({
//    luminosity: 'random',
//    hue: 'random'
// });

// // Returns a bright color in RGB
// randomColor({
//    luminosity: 'bright',
//    format: 'rgb' // e.g. 'rgb(225,200,20)'
// });

// // Returns a dark RGB color with random alpha
// randomColor({
//    luminosity: 'dark',
//    format: 'rgba' // e.g. 'rgba(9, 1, 107, 0.6482447960879654)'
// });

// // Returns a dark RGB color with specified alpha
// randomColor({
//    luminosity: 'dark',
//    format: 'rgba',
//    alpha: 0.5 // e.g. 'rgba(9, 1, 107, 0.5)',
// });

// // Returns a light HSL color with random alpha
// randomColor({
//    luminosity: 'light',
//    format: 'hsla' // e.g. 'hsla(27, 88.99%, 81.83%, 0.6450211517512798)'
// });

// var colorfill = function(color){
//   for(var i of color){
//     var block = document.createElement("div");
//     var hex = document.createTextNode(i);
//     block.style.height= "100px";
//     block.style.width = "100px";
//     block.style.backgroundColor = i;
//     var colorthing = document.getElementById("colorthing");
//     console.log(colorthing);
//     block.appendChild(hex);
//     colorthing.appendChild(block);
//     console.log(i);
//   }
// }

// $("butt").on("click",function(){
//   var forms=$("input");
//   var nums = formcolor.num.value;
//   var hues = formcolor.hues.value;
//   var lums = formcolor.lum.value;
//   var colors = randomcolor({
//     count:nums,
//     hue:hues,
//     luminosity:lums
//   })
//   pagefill(colors);
// })