//Hide the spoilers from spoilerphobes
//reveal the spoiler on an event

//1. Hide the spoiler
$(".spoiler div p").hide();
$(".spoiler div").hide();

//2. add a button
$(".spoiler").append("<button>Show The Spoiler!!!</button>")
//3. When the button is clicked

	//3.1 Show the spoiler
	//3.2 Hide the button
	$(".spoiler button").click(function(){
		$(this).hide();
		$(".spoiler div").show();
		$(".spoiler div p").show();
	})

//create an overlay
var $overlay = $("<div id = 'overlay'></div");
var $img = $("<img id='casteImg'>");
var $caption = $("<p></p>");
$overlay.append($img);
$overlay.append($caption);
$("body").append($overlay);
//When user clicks an table row
$(".caste tr").click(function(){
	//overlay is shown
	var imageLocation = $(this).children("td").children("img").attr("src");
	var captionText = $(this).children("td").children("img").attr("alt");
	$img.attr("src", imageLocation);
	$caption.text(captionText);

	console.log(imageLocation);
	$overlay.show();
})

$overlay.click(function(){
	$overlay.hide();
})
	
//Overlay contains an image & a caption