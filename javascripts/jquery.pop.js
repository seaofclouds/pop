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
  
  $.fn.pop = function(o){
    
    // settings
    var s = {
     pop_toggle_text : '',
     pop_toggle_class : 'pop_toggle',
     pop_menu_class : 'pop_menu'
    }
    
    // $.fn.extend({
    // });
    if(o) $.fn.extend(s, o);
    return this.each(function(i,a){
      // wrap pop menu in div with original classes
      var pop_classes = $(this).attr("class");
      $(this).wrap("<div class='"+pop_classes+"'></div>");
      // add pop menu class
      $(this).addClass(s.pop_menu_class);
      // set pop menu to pop menu class from settings
      $(this).attr("class", s.pop_menu_class);
      // assign reverse z-indexes to each pop
      var pop_count = $(this).size() + 1000;
      var pop_zindex = pop_count - i;
      $(this).parent().css({ zIndex: pop_zindex });
      // insert pop toggle before pop menu
      $(this).before(" \
        <div class='"+s.pop_toggle_class+"'>"+s.pop_toggle_text+"</div> \
      ");
      // if ($(this).parent().hasClass('pop_active') && a!=pop_active) {
      //   $(this).parent().removeClass('pop_active');
      //   }
      $(this).parent().click(function(){
        $(this).parent().toggleClass("pop_active");
      });
    });

    return this.each(function(){
      $(this).parent().click(function(){
        $(this).parent().toggleClass("pop_active");
      });
      var pop_active = null;
      // close pops if user clicks outside of pop
      $(this).parent().mouseover(function() {         
        var pop_active = $(this).index(this); }
      );
      $(this).parent().mouseout(function() {
        var pop_active = null; }
      );
    })
    // close pops if user clicks outside of pop
    function closeInactivePop() {      
      return this.each(function (i) {
      });
      return false;
    }
    $(document.body).click(function(){       
      alert();
     closeInactivePop();
    });

  };

  
})(jQuery);