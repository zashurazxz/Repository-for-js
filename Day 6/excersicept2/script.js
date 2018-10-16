$( ".inner" ).append( "<p>Test</p>" );

var links = $("a");
links.each(function(){
    var link = $(this);
    var href = links.attr("href");
    var thumbnail = youtube.generateThumbnailUrl(href);
    var img = $("<img src=" + thumbnail + ">");
    link.append(img);
});

// instructor code

var links = $("a");
links.each(function(){
    var link = $(this);
    var href = link.attr("href");
    var thumbnail = youtube.generateThumbnailUrl(href);
    var img = $("<img src=" + thumbnail + ">");
    link.append(img)
});

// links.each(function(){
//     $(this).append($("<img src=" + thumbnail + ">")))
// });