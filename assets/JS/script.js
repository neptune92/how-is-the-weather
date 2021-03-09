//var city = document.querySelector("#city")
//var temp = document.querySelector("#temp")
//var humidity = document.querySelector("#humidity")
//var wind = document.querySelector("#wind")
//var uv = document.querySelector("#uv")
//var button = document.querySelector("#button")

//when i look up a city the search button will display the weather info
//get icons to display what type of weather is shown
//call on the api


    //fetch('https://api.openweathermap.org/data/2.5/forecast?q=austin&units=imperial&appid=76b5222b48869ac7baa1d1239fb2354b')
 
   var apiWeather = {
       url: 'api.openweathermap.org/data/2.5/forecast?q=austin&appid=76b5222b48869ac7baa1d1239fb2354b&units=imperial',
       city: 'name',
       main: 'temp',
   }

   var {url, city, main} = apiWeather
   var apiUrl = `${url} ${city} ${main}`
   
   fetch(apiUrl)
   .then( (data) => data.json())
   .then( (theWeather) => showWeather(theWeather) )

   var showWeather = (data) => {
       console.log(data)
       var html = `
       <div class="cityName"> ${data.name}</div>
       <div class="temperature"> ${data.main}</div>
       `
    var weatherDiv = document.querySelector('#city')
    weatherDiv.innerHTML = html

   }