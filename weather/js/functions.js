/* *************************************
*  Weather Site JavaScript Functions
************************************* */

// Variables for Function Use
const temp = 31;
const speed = 5;
const direction = "S";
windDial(direction);


// Calculate the Windchill
function buildWC(speed, temp) {
const feelTemp = document.getElementById('feelTemp');
  // Compute the windchill
  let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
  console.log(wc);
  // Round the answer down to integer
  wc = Math.floor(wc);
  // If chill is greater than temp, return the temp
  wc = (wc > temp)?temp:wc;
  // Display the windchill
  console.log(wc);
  wc = 'Feels like ' + wc + '&deg;F';
  feelTemp.innerHTML = wc;
}
buildWC(speed, temp);

// Wind Dial Function
function windDial(direction){
  const dial = document.getElementById("windPointer");
  console.log(direction);
  // Determine the dial class
  switch (direction){
    case "North":
    case "N":
      windPointer.setAttribute("class", "n");
      break;
    case "NE":
    case "NNE":
    case "ENE":
      windPointer.setAttribute("class", "ne");
      break;
    case "NW":
    case "NNW":
    case "WNW" :
      windPointer.setAttribute("class", "nw");
      break;
    case "South":
    case "S":
      windPointer.setAttribute("class", "s");
      break;
    case "SE":
    case "SSE":
    case "ESE":
      windPointer.setAttribute("class", "se");
      break;
    case "SW":
    case "SSW":
    case "WSW":
      windPointer.setAttribute("class", "sw");
      break;
    case "East":
    case "E":
      windPointer.setAttribute("class", "e");
      break;
    case "West":
    case "W":
      windPointer.setAttribute("class", "w");
      break;
  }
}

// Get data from API
function getData(LOCALE) {
  const WU_API_KEY = '22c70dfd5f847b6a';
  const URL = "https://api.wunderground.com/api/" + WU_API_KEY + "/conditions/forecast/q/" + LOCALE + ".json";
  fetch(URL)
    .then(response => response.json())
    .then(function (data) {
    console.log('Json object from getData function');
    // JSON being saved as the variable 'data'
    console.log(data);
    displayData(data);
  })
    .catch(error => console.log('There was an error: ', error))
} // end getData function

// Display data to website
function displayData(data){
  const STATUS = document.getElementById('status');
  STATUS.innerHTML = 'Getting Location...';
  // Task 1 - Feed data to WC, Dial and Image functions
  let CITY_STATE = data.current_observation.display_location.full;
  console.log(CITY_STATE);

  let ZIP = data.current_observation.display_location.zip;
  console.log(ZIP);

  let ELEVATION = data.current_observation.display_location.elevation;
  console.log(ELEVATION);

  let TEMP_FAREN = data.current_observation.temp_f;
  console.log(TEMP_FAREN);

  let WIND_DIRECTION = data.current_observation.wind_dir;
  console.log(WIND_DIRECTION);

  let WIND_GUST = data.current_observation.wind_gust_mph;
  console.log(WIND_GUST);

  let WIND_SPEED = data.current_observation.wind_mph;
  console.log(WIND_SPEED);

  let CURRENT_WEATHER = data.current_observation.weather;
  console.log(CURRENT_WEATHER);

  let DAILY_HIGH = data.forecast.simpleforecast.forecastday[0].high.farenheit;
  console.log(DAILY_HIGH);

  let DAILY_LOW = data.forecast.simpleforecast.forecastday[0].low.farenheit;
  console.log(DAILY_LOW);
  // Task 2 - Populate location information
  document.getElementById('current_place');
  current_place.innerHTML = CITY_STATE;

  document.getElementById('zipcode');
  zipcode.innerHTML = ZIP;

  document.getElementById('currentelevation');
  currentelevation.innerHTML = ELEVATION;

document.getElementById('longlat');
  longlat.innerHTML = LOCALE;

  document.getElementById('currentTemp');
  currentTemp.innerHTML = TEMP_FAREN;

  document.getElementById('windPointer');
  windPointer.innerHTML = WIND_DIRECTION;

  document.getElementById('gust');
  gust.innerHTML = WIND_GUST;

  document.getElementById('windSpeed');
  windSpeed.innerHTML = WIND_SPEED;

  document.getElementById('placeholder');
  placeholder.innerHTML = CURRENT_WEATHER;
  // Task 3 - Populate weather information (including the wunderground logo and text in footer)

  // Task 4 - Hide status and show main

}
function metersToFeet(elevation){
  elevation = Math.round(ELEVATION * 3.28);
  return elevation;
}
