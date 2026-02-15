const myinp = document.querySelector("#myinput");
const mybtn = document.querySelector("#btn");
const myApi = 'c64aa07f50656d787735a71f23ad9bce';
let myCity = document.querySelector("#city-location");
let temp = document.querySelector("#temp");
let humidity = document.querySelector("#humi");
let wind = document.querySelector("#wind");
let date = document.querySelector("#date");
let cloud = document.querySelector("#clouds");
let image = document.querySelector("#images");
let error = document.querySelector(".error");
let message = document.querySelector(".ui-app");
let weatherDisplay = document.querySelector(".main-container");
const scrollContainer = document.querySelector('.scroll-container');
const days = scrollContainer.querySelectorAll('.days7');





myinp.addEventListener("keydown", (event)=>{
  if(event.key === "Enter"){
   
   if (myinp.value.trim()!="") {
      let cityName = myinp.value;
      
         updateWeather(cityName);
         myinp.value = "";
         myinp.blur();
     }
     else {
         alert("please enter the correct city Name")
     }
}});

mybtn.addEventListener('click', ()=>{
    if (myinp.value.trim()!="") {
     let cityName = myinp.value;
     
        updateWeather(cityName);
        
        myinp.value = "";
        myinp.blur();
    }
    else {
        alert("please enter the correct city Name")
    }
})

 async function updateWeather(cityName) {
  
    try{
       

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c64aa07f50656d787735a71f23ad9bce&units=metric`;

   
     let response = await fetch(url);
     let data = await response.json();
     let weather = data.name;
     myCity.textContent = weather;
     temp.textContent = data.main.temp + " °C";
     humidity.textContent = data.main.humidity+" %";
     console.log(data);
     cloud.textContent = data.weather[0].main;
     wind.textContent = data.wind.speed +" M/S";

     let today = new Date();
     let options = { weekday: 'short', day: '2-digit', month: 'short' }; // Formatting options
     let formattedDate = today.toLocaleDateString('en-GB', options);
     date.textContent = formattedDate; // Set today's date in the required format

     if(data.weather[0].main=== "Clear"){
        image.src = "/assets/weather/clear.svg"
     }
     else if(data.weather[0].main=== "Atmosphere"){
         image.src = "/assets/weather/atmosphere.svg"
     }
     else if(data.weather[0].main=== "Clouds"){
        image.src = "/assets/weather/Clouds.svg"
     }
     else if(data.weather[0].main=== "Drizzle"){
        image.src = "/assets/weather/drizzle.svg"
     }
     else if(data.weather[0].main=== "Rain"){
        image.src = "/assets/weather/rain.svg"
     }
     else if(data.weather[0].main=== "Snow"){
        image.src = "/assets/weather/snow.svg"
     }
     else if(data.weather[0].main=== "Haze"){
        image.src = "/assets/weather/haze.png"
        image.style.width = "95px"
     }
     else {
        image.src = "/assets/weather/thunderstorm.svg"
     }
if (error.style.display === "block") {
    error.style.display = "none";
    message.style.display = "none";
    weatherDisplay.style.display = "block"; 
}
message.style.display = "none";
weatherDisplay.style.display = "block"; 
    

let lat = data.coord.lat;
let lon = data.coord.lon;
updateForecast(cityName, lat, lon);

    }
    catch(e){
        if(weatherDisplay.style === "block" &&  message.style.display ==="block")
         message.style.display ="none"
         weatherDisplay.style.display ="none"
         error.style.display = "block";
    }
     message.style.display ="none"

    } 
  
    async function updateForecast(cityName, lat, lon) {
      let foreCastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${myApi}&units=metric`;
  
      try {
          let response = await fetch(foreCastUrl);
          let data = await response.json();
          console.log(data); // Log forecast data for inspection
  
          // Loop through the forecast data for 7 days (each day has 8 intervals)
          data.list.forEach((forecast, index) => {
              if (index % 8 === 0 && index / 8 < 5) { // Only process the first 5 days
  
                  let dayIndex = Math.floor(index / 8); // Calculate the day index
                  let dayDiv = days[dayIndex]; // Get the corresponding day div
  
                  // Update the day <p> element
                  let forecastDate = new Date(forecast.dt_txt);
                  let options = { weekday: 'long' }; // Only get the day of the week
                  let formattedDate = forecastDate.toLocaleDateString('en-GB', options);
                  let dayParagraph = dayDiv.querySelector('p');
                  dayParagraph.textContent = formattedDate; // Set the date
  
                  // Update the temperature <h4> element
                  let tempElement = dayDiv.querySelector('h4');
                  tempElement.textContent = forecast.main.temp + " °C"; // Set the temperature
  
                  // Update the image based on the weather condition
                  let weatherCondition = forecast.weather[0].main;
                  let dayImage = dayDiv.querySelector('img');
  
                  if (weatherCondition === "Clear") {
                      dayImage.src = "/assets/weather/clear.svg";
                  } 
                  else if (weatherCondition === "Atmosphere") {
                      dayImage.src = "/assets/weather/atmosphere.svg";
                  } 
                  else if (weatherCondition === "Clouds") {
                      dayImage.src = "/assets/weather/Clouds.svg";
                  } 
                  else if (weatherCondition === "Drizzle") {
                      dayImage.src = "/assets/weather/drizzle.svg";
                  } 
                  else if (weatherCondition === "Rain") {
                      dayImage.src = "/assets/weather/rain.svg";
                  } 
                  else if (weatherCondition === "Snow") {
                      dayImage.src = "/assets/weather/snow.svg";
                  } 
                  else if (weatherCondition === "Haze") {
                      dayImage.src = "/assets/weather/haze.png";
                      dayImage.style.width = "95px";
                  } 
                  else {
                      dayImage.src = "/assets/weather/thunderstorm.svg";
                  }
              }
          });
  
      } catch (error) {
          console.error('Error fetching forecast data:', error);
      }
  }
  