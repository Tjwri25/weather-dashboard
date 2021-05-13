var apiURL = "0314bd76bd07321db823b61641900d3d"
var citySearch = document.querySelector("#city-search");
var searchButton = $("#search-button");
var cityList =$("#list-cities");
let lat;
let long;
let day1 = document.getElementById("dayOne");
let day2 = document.getElementById("dayTwo"); 
let day3 = document.getElementById("dayThree"); 
let day4 = document.getElementById("dayFour");
let day5 = document.getElementById("dayFive");
var weatherIcons = {
  sunny: "☀️",
  cloudy: "☁",
  partlySunny: "⛅",
  rainy: "🌧",
  snowy: "❄️",
  stormy: "⛈",
  windy: "🌬",
  foggy: "🌫",
}


  

searchButton.on("click", function () {
  console.log("clicked")
    
    var searchInput = $("#city-search").val();
    localStorage.setItem("city", JSON.stringify(searchInput));

});

// function makeList() {
//     var searchInput = $("#city-search").val();
//     var listItem = $("<li>").text(searchInput);
//     $(cityList).append(listItem);
//     makeList();
//   };
// //  fetch ('api.openweathermap.org/data/2.5/weather?q= '+inputValue.value+'&appid=0314bd76bd07321db823b61641900d3d')
// //     .then(response => response.json())
// //     .then(data => console.log(data))

// $(searchButton).on("click", getApi)



function getApi() {
  var city = citySearch.value.trim();
  var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiURL}`;
  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  }) 
  .then(function (data) {
    console.log(data)


  })

}
$(searchButton).on("click", getApi)










