//
//  pop! for jQuery
//  v0.2 requires jQuery v1.2 or later
//  
//  Licensed under the MIT:
//  http://www.opensource.org/licenses/mit-license.php
//  
//  Copyright 2007,2008 SEAOFCLOUDS [http://seaofclouds.com]
//

(function($) {
  
  $.pop = function(options){
    
    // settings
    var settings = {
     pop_class : '.pop'
    }
    // inject html wrapper
    var pop_classes = $(settings.pop_class).attr("class");
    $(settings.pop_class).addClass("pop_menu");
    $(settings.pop_class).wrap("<div class='"+pop_classes+"'></div>");
    $(".pop_menu").attr("class", "pop_menu");
    $(settings.pop_class).prepend(" \
     <span class='pop_toggle pop_menu_button'><a href='#' title='menu'>menu</a></span> \
     ");
    //$(".pop_menu").prepend(" \
    // <a href='#' class='pop_toggle pop_close_button' title='close'>close</a> \
    // ");
    // assign reverse z-indexes to each pop
    var totalpops = $(settings.pop_class).size() + 1000;
    $(settings.pop_class).each(function(i) {
     var popzindex = totalpops - i;
     $(this).css({ zIndex: popzindex });
    });
    // close pops if user clicks outside of pop
    activePop = null;
    function closeInactivePop() {
      $(settings.pop_class).each(function (i) {
        if ($(this).hasClass('active') && i!=activePop) {
          $(this).removeClass('active');
          }
      });
      return false;
    }
    $(settings.pop_class).mouseover(function() { activePop = $(settings.pop_class).index(this); });
    $(settings.pop_class).mouseout(function() { activePop = null; });

    $(document.body).click(function(){ 
     closeInactivePop();
    });
    // toggle that pop
    $(".pop_toggle").click(function(){
     $(this).parents(settings.pop_class).toggleClass("active");
    });
  }

})(jQuery);