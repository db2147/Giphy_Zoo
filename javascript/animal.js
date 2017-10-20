var animalButtons
			//web URL with api key
var queryURL = "https://giphy.com/search/animals&apikey=tFriDfADykrYHsiVZS1J7YhZimeGAIBQ";

var animal input
var add animal
var topics = ["birds", "monkeys", "bears", "pigs", "dog", "cat", "rabbit", "turtle", "gophur"];

// Function for displaying movie data
function renderButtons() {

// (this is necessary otherwise we will have repeat buttons)
$("#animalButtons").empty();

// Looping through the array of movies
for (var i = 0; i < topics.length; i++) {

//this code is all jquery needs to create the start and end tag (<button></button)
var a = $("<button>");
//adding a class
a.addClass("animal")
// Adding a data-attribute with a value of the movie at index i
a.attr("data-name", topics[i]);
// Providing the button's text with a value of the movie at index i
a.text(topics[i]);
// Adding the button to the html
$("#animalButtons").append(a);
	}
}
// This function handles events where one button is clicked
$("#add-animal").on("click"), function(event) {
//event.preventDefault() prevents the form from trying to submit itself.
//We're using a form so that the user can hit enter instead of clicking the button if they want
event.preventDefault();




}