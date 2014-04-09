jQuery Event Handlers and Listeners

Common events

	click
	mouseover
	mouseout
	mouseenter
	mousemove
	scroll
	keydown
	keyup 
	keypress
	focus
	blur
	load (images)
	resize(window)
	unload
	change(input)
	input

$('h1').on('click', turnGreen); --> CORRECT
	$('h1').on('click', "turnGreen"); --> this is just a string of characters to JavaScript
		$('h1').on('click', turnGreen()); -->

CALLBACK - A function that is passed to a different owner to be called.  
	-An EVENT HANDLER is a type of CALLBACK

EXPRESSION - evaluates to a value
turnGreen is a...
 -a function...
 -a function object 
 -it is NOT an expression

***FIRST USE OF...
	e  
	e.preventDefault
	e.target

