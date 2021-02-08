
$(document).ready(function () {

var searchButton = $("#search-button");
var cityList =$("#list-cities");
var searchInput = $("#city-search").val();
var city = [];

var apiKey = "0314bd76bd07321db823b61641900d3d"


searchButton.on("click", function () {
//   console.log("clicked")
    
    var searchInput = $("#city-search").val();
    localStorage.setItem("city", JSON.stringify(searchInput));

});

function makeList() {
    var listItem = $("<li>").text(searchInput);
    $(cityList).append(listItem);
  };
//  fetch ('api.openweathermap.org/data/2.5/weather?q= '+inputValue.value+'&appid=0314bd76bd07321db823b61641900d3d')
//     .then(response => response.json())
//     .then(data => console.log(data))
})