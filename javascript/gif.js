		var topics = ["Hip Hop", "Rap", "RnB", "Country Music", 
		"Gospel Music", "Heavy Metal", "Rock & Roll", "Pop Music", "Jazz"] 

      	function displayTopicInfo() {

        var topic = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";

       				 $.ajax({
          			url: queryURL,
         			 method: "GET"
       				 }).done(function(response) {


	      		  for ( var i=0; i < response.data.length; i++) {

	        			console.log(response.data.length);

	        	var pic = $("<img>")
		 .attr("src", response.data[i].images.fixed_height_still.url)
						     
		.attr("still", response.data[i].images.fixed_height_still.url)
						       
		.attr("moving",response.data[i].images.fixed_height.url)
						       
		 .on("click", function(animate){
			if ($(this).attr("src") == $(this).attr("still"))
			$(this).attr("src", $(this).attr("moving"))
			else 
			$(this).attr("src", $(this).attr("still"))});		        		

	        
	

	var rating = $("<p>")
	.text("Rating: " + response.data[i].rating);
								
			

		var gif= $("<div>")
		.append(pic)
		.append(rating)
		.addClass("parent")
		$("#image-container").append(gif)};});
    		};

	  			function renderButtons(){

	  			$("#genreButtons").empty();

	  			for (var i=0; i<topics.length; i++)

	  			{var button1 = $("<button>");
				button1.addClass("genre");
	  			button1.attr("data-name", topics[i]);
	  			button1.text(topics[i]);
	  			$("#genreButtons").append(button1);}}
	  renderButtons();
	 
	 $("#add-genre").on("click", function(event){
	 	event.preventDefault();
	 	var topic = $("#genre-input").val().trim();
	 	topics.push(topic);
	 	renderButtons();});


	$(document).on("click", ".genre", function(){
	 		$("#image-container").empty();
	 	});
	$(document).on("click", ".genre", displayTopicInfo);


