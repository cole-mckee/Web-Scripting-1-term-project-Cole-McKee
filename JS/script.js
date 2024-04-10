
// equipment page --------------------------------------
// document.ready function is linking a function to a query, sort of like a query selector. this function goes into the jquery plugin, and grabs the function. this attacthes the resppnsiveSlides function to the rslides item. 
$(document).ready(function(){
    $(".rslides").responsiveSlides();
}); 

// these are the options that are linked to the function responsiveSlides.
$(".rslides").responsiveSlides({
    // sets autoplay
    // the comments on the side came with the plugin, which was very kind of them :)
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 2000,            // Integer: Speed of the transition, in milliseconds
    timeout: 20,          // Integer: Time between slide transitions, in milliseconds
    pager: false,           // Boolean: Show pager, true or false
    nav: false,             // Boolean: Show navigation, true or false
    random: false,          // Boolean: Randomize the order of the slides, true or false
    pause: false,           // Boolean: Pause on hover, true or false
    pauseControls: true,    // Boolean: Pause when hovering controls, true or false
    prevText: "Previous",   // String: Text for the "previous" button
    nextText: "Next",       // String: Text for the "next" button
    maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
    navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
    manualControls: "",     // Selector: Declare custom pager navigation
    namespace: "rslides",   // String: Change the default namespace used
    before: function(){},   // Function: Before callback
    after: function(){}     // Function: After callback
  });



