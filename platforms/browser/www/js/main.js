
$(function(){
	
	$("div.touch").on("tap",function(){
	  alert("you tapped me");
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