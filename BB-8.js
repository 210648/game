$(document).keydown(function(e) {
    $(charactertwo).keydown;
    switch (e.which) {

      //move left
      case 37:
        $(charactertwo).animate({
          left: "-=40px"
        }, 'fast');
        break;

        //move up
      case 38:
        $(charactertwo).animate({
          top: "-=40px"
        }, 'fast');
        break;

        //move right
      case 39:
        $(charactertwo).animate({
          left: "+=40px"
        }, 'fast');
        break;

         function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    $.each($('.stormtroopers'), function() {
      if (collision($('#charactertwo'), $(this)))

        $("#gameovertwo").show().delay(200)
    }

      $.each($('.win'), function(){
$("youwintwo").show().delay(200)
       }
    });
  }, 200); 