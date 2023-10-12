// Weather api using package called axios and open source link 


const axios = require("axios")

// api 
const url = "https://api.open-meteo.com/v1/forecast?latitude=12.9184&longitude=79.1325&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=GMT";

axios.get(url)
  .then((response) => {
    // destructing the  daily ,hourly_units ,hourly from response.data 
    const { daily, hourly_units, hourly } = response.data
    console.log({ hourly_units, hourly, daily, })

    // destructing the sunrise and sunset from the daily 
    const { sunrise, sunset } = daily;
    console.log({ sunrise: sunrise.toString(), sunset: sunset.toString() });
  })
  .catch(function (error) {
    console.log({ error });
  })
