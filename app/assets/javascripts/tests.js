// Turn on / off eyes flash
  $('.flash').click(function() {
    $('.brain').toggleClass('laser');
  });

  // Creates random color
  $(".color").click(function() {
  	var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
  	// Generate an RGBA value from red, green and blue
  	var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';
  	// Display the RGBA value in an alert window
  	alert(randomRGBA);
  });


// Change body background
$('body'.css('brackground', randomRGBA);