var animalButtons;
			//web URL with api key
var queryURL = "https://giphy.com/search/animals&apikey=tFriDfADykrYHsiVZS1J7YhZimeGAIBQ";

var animalInput = "";
var addAnimal = "";
var topics = ["birds", "monkeys", "bears", "pigs", "dog", "cat", "rabbit", "turtle", "gophur"];

var animalButtons
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
$("#addAnimal").on("click"), 
    function(event) {
        //event.preventDefault() prevents the form from trying to submit itself.
        //We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();
        // This line grabs the input from the textbox
        var animal = $("#animal-input").val().trim();
        //Adding the animal from the textbox to our array
        topics.push(animal);
        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
        console.log();


    }

imageUrl = [];
stillimageUrl = [];


function animalClick() {
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
    	console.log(response); // results from GIPHY}
        for (var i = 0; i < 10; i++) {
            // animated gif
            imageUrl[i] = response.data[i].images.fixed_height.url;
            // still gif
            stillimageUrl[i] = response.data[i].images.fixed_height_still.url;
            // add div for image
            var imgDiv = $("<div>");
            // add class for image div
            // imgDiv.addClass("imageDiv well well-sm");
            // add image tag
            var cImage = $("<img>");
            // add image properties
            cImage.attr("src", stillimageUrl[i]);
            cImage.attr("alt", bClick + " Image #" + i);
            cImage.attr("alt_src", imageUrl[i]);
            cImage.addClass("image");
            // append img to div
            imgDiv.append(cImage);
            // create tag to hold rating
            var imgRating = $("<h3>");
            imgRating.text("Rating: " + response.data[i].rating.toUpperCase());
            // append rating to image div
            imgDiv.append(imgRating);
            // add image divs to left or right divs based on i.
            $("#animals").append(imgDiv);

        }
    });
}

function imageSwitch() {
    tmp = $(this).attr('src');
    tmp2 = $(this).attr('alt_src');

    console.log(tmp);
    console.log(tmp2);

    $(this).attr('src', $(this).attr('alt_src'));
    $(this).attr('alt_src', tmp);
}

renderButtons();

$(document).on("click", ".animal", animalClick);
// listen for click on image and pass to imageSwitch function
$(document).on("click", ".image", imageSwitch);