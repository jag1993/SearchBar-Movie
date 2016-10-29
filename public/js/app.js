var currentURL = window.location.origin; 
var team =[]
var teamFinal;
var submitTeam;
$('#movieSearch').keypress(function () {
  $("#results").empty();
var searchedMovie = $('#movieSearch').val();
$.get(currentURL + "/api/"+ searchedMovie, function(res){ 
for(i=0;i<res.length;i++){
      var poster = $("<img>")
      poster.attr("src", res[i].poster);
       $("#results").append(res[i].title);
       $("#results").append("</br>");
       $("#results").append(poster);
       $("#results").append("</br>");    
      }
});
})


 


