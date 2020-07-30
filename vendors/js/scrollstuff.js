var scrollstuff = (function($){

  var _global = {
    wp: 0,
  };


  /**
   * checks if element in in view and applies class
   * @param  {jQuery Selector} The full jQuery selector you want to use
   * passed from inview() initial call
   */
  var _inviewChecker = function($passedselector, passedrepeat, passedclassname, passeddelay){
    if($passedselector !== undefined){
      $passedselector.each(function(){
        if( _global.wp + $(window).height() > $(this).offset().top ){
          var $passedthis = $(this);
          setTimeout(function(){
            $passedthis.addClass(passedclassname);
          }, passeddelay);
        }else{
          if(passedrepeat){
            $(this).removeClass(passedclassname);
          }
        }
      });
    }
  };


  /**
   * Updates the method-global window scroll position
   */
  var _updateScrolltop = function(){
    _global.wp = $(window).scrollTop();
  };


  /**
   * @param  {object} Takes the input parameters from original call
   */
  var inview = function( selector, calledinput ){

    var repeat    = false;
    var classname = 'this--nowinview';
    var delay     = 0;

    if (typeof(calledinput) !== 'undefined') {
      repeat    = calledinput.repeat    || repeat;
      classname = calledinput.classname || classname;
      delay     = calledinput.delay     || delay;
    }

    _updateScrolltop(); // initial check;
    _inviewChecker(selector, repeat, classname, delay);

    $(window).scroll( function(){
      _updateScrolltop();
      _inviewChecker(selector, repeat, classname, delay);
    }); // end window scroll
  };


  var _height = function($selector){
    return $selector.outerHeight(true);
  };


  /**
   *
   * Extends the jQuery Object with the scrollstuff Method,
   * which calls the inview method with an input object as defined below
   *
   * @param  {object}       Takes the following input parameters
   *
   *   {
   *      repeat:    {boolean}  whether or not the animation repeats
   *                            when it's out and in of view again
   *      classname: {string}   name of the class to attach to object
   *                            'this--nowinview' by default.
   *      delay:     {int}      delay until class is added, in milliseconds
   *   }
   *
   */
  jQuery.fn.scrollstuff = function(inputobject) {
    inview(this, inputobject);
    return this;
  };

  return{
    inview: inview,
  };

})(jQuery);
