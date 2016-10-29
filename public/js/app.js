var currentURL = window.location.origin; 
$('#movieSearch').keypress(function () {
	$("#results").empty();
	var searchedMovie = $('#movieSearch').val();
	$.get(currentURL + "/api/"+ searchedMovie, function(res){ 
		for(i=0;i<res.length;i++){
			var poster = $("<img>")
			poster.attr("src", res[i].poster);
			$("#results").append(res[i].title + " (" + res[i].year + ")");
			$("#results").append("</br>");
			if(res[i].poster === 'N/A'){
				$("#results").append("--No Poster--");
			}else{
				$("#results").append(poster);
			}
			$("#results").append("</br>");    
		}
	});
})


 


