// Getting Weather data from Users Current Location.
let temprature = document.getElementById("temp");
let humid = document.getElementById("humidity");
let winds = document.getElementById("wind");
let city_name = document.getElementById("name");
let weather = document.getElementById("weather");
if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(function (position) {
    let longitude = position.coords.longitude;
    let latitude = position.coords.latitude;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b007ce3155aa719c1e8002177f7b8632`
    )
      .then(get_weatherData)
      .then(handle_weatherData);
  });

let get_weatherData = function (response) {
  return response.json();
};

let handle_weatherData = function (json) {
  let name = json["name"];
  city_name.innerText = name;
  let temp = json["main"].temp - 273.15 + "°C | F°";
  temprature.innerText = temp;
  let humidity = "humidity :" + json["main"].humidity + "%";
  humid.innerText = humidity;
  let wind = "winds :" + json["wind"].speed * 3.6 + "km/h";
  winds.innerText = wind;
  let wheather = json["weather"][0].description;
  weather.innerText = wheather;
};

// Searching for diffrent cities

let searched_container = document.getElementById("searched_container");
let searched_temp = document.getElementById("searched_temp");
let searched_humidity = document.getElementById("searched_humidity");
let searched_winds = document.getElementById("searched_wind");
console.log(searched_winds);
let searched_place = document.getElementById("searched_place");
let searched_weather = document.getElementById("searched_weather");

let get_search_response = function (response) {
  return response.json();
};

let handle_search_data = function (json) {
  let s_weather = json["weather"][0].description;
  searched_weather.innerText = s_weather;
  let s_temp = json["main"].temp - 273.15 + "°C | F°";
  searched_temp.innerText = s_temp;
  let s_name = json["name"];
  searched_place.innerText = s_name;
  let s_humidity = "humidity" + json["main"].humidity + "%";
  searched_humidity.innerText = s_humidity;
  let s_winds = "winds :" + json["wind"].speed * 3.6 + "km/h";
  searched_winds.innerText = s_winds;
};

let getSearchData = function () {
  let input_feild = document.getElementById("input");
  let value = input_feild.value;

  if (value) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        value +
        "&appid=b007ce3155aa719c1e8002177f7b8632"
    )
      .then(get_search_response)
      .then(handle_search_data);

    input_feild.value = "";
    searched_container.classList.remove("display");
  } else {
    alert("enter something");
  }
};

let btn = document.getElementById("btn");
btn.addEventListener("click", getSearchData);
