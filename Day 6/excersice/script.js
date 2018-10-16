var vidid = youtube.getIdFromUrl("https://www.youtube.com/watch?v=TddFnTB_7IM");
vidid = "TddFnTB_7IM";

var vidthumb = youtube.generateThumbnailUrl("https://www.youtube.com/watch?v=TddFnTB_7IM");
vidthumb = "http://i3.ytimg.com/vi/TddFnTB_7IM/default.jpg";

var vidwatch = youtube.generateWatchUrl("TddFnTB_7IM");
vidwatch = "https://www.youtube.com/watch?v=TddFnTB_7IM";

var vidembed = youtube.generateEmbedUrl("https://www.youtube.com/watch?v=TddFnTB_7IM");
vidembed = "http://www.youtube.com/embed/TddFnTB_7IM";


// var select = document.querySelectorAll("a")
// for(var i of select){
//     var names=i.getAttribute("href");
//     var thumb = youtube.generateThumbnailUrl(names);
//     var images = document.createElement("img");
//     images.src=thumb;
//     i.appendChild(images);
// }


// instructor code
var links = document.querySelectorAll("a")
for (var i = 0; i < links.length; i++){
    var href = links[i].getAttribute("href");
    var thumbnail = youtube.generateThumbnailUrl(href);
    var img = document.createElement("img");
    img.setAttribute("src", thumbnail);
    links [i].appendChild(img);
}
