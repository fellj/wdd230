const wchill = document.querySelector("#windchill");
// const currentTemp = parseFloat(document.querySelector("#temp").textContent);


// select HTML elements in the document (Weather API)
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windspeed = document.querySelector('#windspeed');

const url = "https://api.openweathermap.org/data/2.5/weather?q=Galveston&units=Imperial&appid=48c7c7e7511069df1c9898b940b82489";

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    windspeed.innerHTML   = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

const capDesc = desc.split(" ").map(word => {
        let firstLetter = word.charAt(0).toUpperCase();
        return`${firstLetter}${word.slice(1)}`;
    }).join(" ")


    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;




let windchill;

if (temp <= 50.0 && windspeed > 3.0) {
    
    windchill = Math.round(
        35.74 + 0.6215 * temp - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temp * Math.pow(windspeed, .16)
    );

     wchill.textContent = windchill;
}
else {
    windchill = "N/A";
    wchill.textContent = windchill;
    
}
  }