$(document).on('ready', function() {

//Event handler/listener

	// var turnGreen = function() {
	// 	$('h1').css ('color', 'green');
	// };

	// turnGreen();
//cdt h1 element "Welcome to jQuery!" turns green


//attaching and event handler
	//$('h1').on('click', turnGreen);
//reload CDT
//when you click on the h1 element, it turns green

//

	// $('h1').on('mouseover', turnGreen);
//h1 turns green on mouseover

	// var turnBlue = function() {
	// 	$('h1').css ('color', 'blue');
	// };

	//$('h1').on('mouseout', turnBlue);
	//h1 turns blue on mouseout

// 

//eliminate the need for a separate turnGreen function
//this is an anonymous function
//it's shorter
//it is NOT re-usable

	// $('h1').on('click', function() {
	// 	$('h1').css('color', 'green');
	// });

//

	// $('h1').on('click', function(e) {
	// 	console.log('Your log is working REFACTORU');
	// 	e.preventDefault();
	// });


//added a second h1 for gSchool

	$('h1').on('mouseover', function(e) {
		$(e.target).css('color', 'green');
	});

	$('h1').on('mouseout', function(e) {
		$(e.target).css('color', 'black');
	});


});



