console.log("JavaScript is loaded");

$( document ).ready(function() {
  console.log("Document is ready");
    $( "#menu" ).click(function() {
        $("#navigation-bar").toggleClass("navigation-bar--hidden");
        $("#content").toggleClass("content--no-navigation");
  });

  //when the FAB is clicked, 
  $("#button-card-transition").click(function() {
    //animate button

    //animate button when clicked
    $("#button-card-transition")
    .addClass("button-click");

    //Remove the button click class after
    //the animation ends
    setTimeout(function(){
      $("#button-card-transition")
      .removeClass("button-click");
    },300);

    console.log("button clicked")
      //if the red card is faded out,
      //fade in red, fade out blue
      if($(".card_red").hasClass("fade-through-out")){
        fadeThrough(
          $(".card_blue"),
          $(".card_red")
        );
          rotateToggle(
            $("#icon-plus"),
            $("#icon-switch")
          );
      }
    
      //if the red card is NOT faded out
      //fade in blue then fade out red
      else{
        fadeThrough(
          $(".card_red"),
          $(".card_blue")
        );
        rotateToggle(
          $("#icon-switch"),
          $("#icon-plus")
        );

      }
      
  });

  function fadeThrough(elementFadeOut, elementFadeIn){
    //remove fade in class from red card
    elementFadeOut.removeClass("fade-through-in");
     //fade out red content
     elementFadeOut.addClass("fade-through-out");

     //Remove fade out class from blue card
     elementFadeIn.removeClass("fade-through-out");
     //Add fade in class to the blue card
     elementFadeIn.addClass("fade-through-in");
  }

  function rotateToggle(elementRotateOut, elementRotateIn){
    //remove fade in class from red card
    elementRotateOut.removeClass("rotate-in");
     //fade out red content
     elementRotateOut.addClass("rotate-out");

     //Remove fade out class from blue card
     elementRotateIn.removeClass("rotate-out");
     //Add fade in class to the blue card
     elementRotateIn.addClass("rotate-in");
  }





});

