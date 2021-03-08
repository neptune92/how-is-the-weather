var city = document.querySelector("#city")
var temp = document.querySelector("#temp")
var humidity = document.querySelector("#humidity")
var wind = document.querySelector("#wind")
var uv = document.querySelector("#uv")
var button = document.querySelector("#button")

//when i look up a city the search button will display the weather info
//get icons to display what type of weather is shown
//call on the api

button.addEventListener("click", function(){
    fetch('api.openweathermap.org/data/2.5/forecast?q='+city.value+'&appid=76b5222b48869ac7baa1d1239fb2354b')
.then(response => response.json)
.then (data => {
    var cityName = data["city"];
    var tempValue = data["main"]["temp"];

    city.innerHTML = cityName;
    temp.innerHTML = tempValue;
})


.catch (err => alert("Wrong city!"))
})