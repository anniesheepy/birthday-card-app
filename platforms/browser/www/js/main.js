var obj = document.getElementById("song");

$(function(){	
	$("div.touch").on("tap",function(){
	  $(".default").hide();
      $("#imgs").addClass("showgallery");
      $("audio").addClass("showgallery"); 
      $(".instrcut").addClass("show"); 
      obj.play(); 
	});		
});



$(function(){
  // Bind the swipeleftHandler callback function to the swipe event on div.box
  $( "div.box" ).on( "swipeleft", swipeleftHandler );
 
  // Callback function references the event target and adds the 'swipeleft' class to it
  function swipeleftHandler( event ){
    $( event.target ).addClass( "swipeleft" );
  }
});

        var IMG_WIDTH = 500;
        var currentImg = 0;
        var maxImages = 12;
        var speed = 500;
        var imgs;
        var swipeOptions = {
            triggerOnTouchEnd: true,
            swipeStatus: swipeStatus,
            allowPageScroll: "vertical",
            threshold: 75
        };
        $(function () {
            imgs = $("#imgs");
            imgs.swipe(swipeOptions);
        });
        /**
         * Catch each phase of the swipe.
         * move : we drag the div
         * cancel : we animate back to where we were
         * end : we animate to the next image
         */
        function swipeStatus(event, phase, direction, distance) {
            //If we are moving before swipe, and we are going L or R in X mode, or U or D in Y mode then drag.
            if (phase == "move" && (direction == "left" || direction == "right")) {
                var duration = 0;
                if (direction == "left") {
                    scrollImages((IMG_WIDTH * currentImg) + distance, duration);
                } else if (direction == "right") {
                    scrollImages((IMG_WIDTH * currentImg) - distance, duration);
                }
            } else if (phase == "cancel") {
                scrollImages(IMG_WIDTH * currentImg, speed);
            } else if (phase == "end") {
                if (direction == "right") {
                    previousImage();
                } else if (direction == "left") {
                    nextImage();
                }
            }
        }
        function previousImage() {
            currentImg = Math.max(currentImg - 1, 0);
            scrollImages(IMG_WIDTH * currentImg, speed);
        }
        function nextImage() {
            currentImg = Math.min(currentImg + 1, maxImages - 1);
            scrollImages(IMG_WIDTH * currentImg, speed);
        }
        /**
         * Manually update the position of the imgs on drag
         */
        function scrollImages(distance, duration) {
            imgs.css("transition-duration", (duration / 1000).toFixed(1) + "s");
            //inverse the number we set in the css
            var value = (distance < 0 ? "" : "-") + Math.abs(distance).toString();
            imgs.css("transform", "translate(" + value + "px,0)");
        }