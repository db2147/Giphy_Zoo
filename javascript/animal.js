var animalButtons;
			//web URL with api key
var queryURL = "https://giphy.com/search/animals&apikey=tFriDfADykrYHsiVZS1J7YhZimeGAIBQ";

var animalInput = "";
var addAnimal = "";
var topics = ["birds", "monkeys", "bears", "pigs", "dog", "cat", "rabbit", "turtle", "gophur"];

// Function for displaying movie data
function renderButtons() {

// (this is necessary otherwise we will have repeat buttons)
$("#animalButtons").empty();

// Looping through the array of movies
for (var i = 0; i < topics.length; i++) {
	// create buttons
	var a = $("<button>"); //created the button var in jquery
	// append topics[i] to button data-attribute
	// show button topics[i] text value 
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
$("#addanimal").on("click"), 
	function(event) {
//event.preventDefault() prevents the form from trying to submit itself.
//We're using a form so that the user can hit enter instead of clicking the button if they want
	event.preventDefault();

	}

imageURL = [];
stillimageURL = [];

	function animalClick( {
		var bClick = $(this).attr("data-name");
		// clear image divs
		$("#animals").empty();
		// AJAX query string based on value from button click.
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + bClick + "&rating=pg-13&limit=10&api_key=tFriDfADykrYHsiVZS1J7YhZimeGAIBQ";
		// console.log(queryURL);

		$.ajax({
			url: queryURL,
			method: "GET"
		})
		.done(function(response) {
			console.log(response); //results from GIPHY}
			for (var i = 0; i < 10; i++) {
				// animated gif
				imageURL[i] = response.data[i].images.fixed_height.url;
				// still gif
				stillimageURL[i] = response.data[i].images.fixed_height_still.url;
				// add class for image div
				// imgDiv.addClass("imageDiv well well-sm");
				// add image tag
				var cImage = $("<img>");
			}
				}
		}



	})
// This line will grab the text from the input box
var animal = $("#animalinput").val().trim();
// The movie from the textbox is then added to our array
topics.push(animas);

//calling renderButtons which handle the processing of our movie array
renderButtons();
};

 //the code at the end puts it all together; calls the code above
