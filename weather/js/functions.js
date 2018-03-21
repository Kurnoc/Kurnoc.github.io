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
  const URL = "https://api.wunderground.com/api/" + WU_API_KEY + "/conditions/q/" + LOCALE + ".json";
  fetch(URL)
    .then(response => response.json())
    .then(function (data) {
    console.log('Json object from getData function');
    console.log(data);
    displayData(data);
  })
    .catch(error => console.log('There was an error: ', error))
} // end getData function

// Display data to website
function displayData(data){
  const STATUS = document.getElementById('status');
  STATUS.innerHTML = 'Getting Location...';
}
