 (function($){

  // material mobile menu

  $(".button-collapse").sideNav();


  $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: true, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter:false, // Spacing from edge
        belowOrigin: true // Displays dropdown below the button

      }
    );


 }(jQuery));
