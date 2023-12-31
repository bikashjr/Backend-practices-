const moment = require("moment");
const axios = require("axios");

// API URL
const url = "https://api.open-meteo.com/v1/forecast?latitude=12.9184&longitude=79.1325&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=GMT";

axios.get(url)
  .then((response) => {
    // Destructuring data from the response
    const { daily, hourly_units, hourly } = response.data;

    // Destructuring the sunrise and sunset from the daily data
    const { sunrise, sunset } = daily;

    // Formatting sunrise and sunset times using moment.js
    const formattedSunrise = moment.unix(sunrise).format("LLL");
    const formattedSunset = moment.unix(sunset).format("LLL");
    
    console.log("Daily data:", daily);
console.log("Sunrise:", sunrise);
console.log("Sunset:", sunset);

    console.log({
      hourly_units,
      hourly,
      daily: {
        sunrise: formattedSunrise,
        sunset: formattedSunset,
      },
    });
  })
  
  .catch(function (error) {
    console.log({ error });
  });
