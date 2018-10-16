$(function(){
    $("button").click(function(){
      var $p = $("#P44");
      $p.stop()
        .css("background-color","yellow")
        .hide(1500, function() {
            $p.css("background-color","red")
              .show(1500);
        });
    });
  });