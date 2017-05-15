var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

function getQuote() {
	$.getJSON(quoteUrl, createTweet);
}

function createTweet(input) {
	var data = input[0];

    var quoteText = $(data.content).text().trim();
    var quoteAuthor = data.title;

    if (!input.quoteAuthor.lenght) {
		input.quoteAuthor = "Unknown Author";
	}

	var tweetText = "Quote of the day - " + input.quoteText + " Author: " + input.quoteAuthor;

	if (tweetText.lenght > 140) {
		getQuote();
	} else {
		var tweet = tweetLink + encodeURIComponent(tweetText);
		$('.quote').text(input.quoteText);
		$('.author').text("Author: " + input.quoteAuthor);
		$('.tweet').attr('href', tweet);
	}
}

$(document).ready(function() {
	getQuote();
		$(".trigger").click(function(){
			getQuote();
	});
});
