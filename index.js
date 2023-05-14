const apiKey = "925164d9c711ff3725ae8f7f8a1c24c8";
const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const weatherApi = url+`&appid=${apiKey}`;
let temp = document.getElementById("temp");
let wind= document.getElementById("wind");
let city = document.getElementById("city");
let humidity = document.getElementById("humidity");
let search = document.getElementById("search");
let userInput = document.getElementById("userInput");
let cloudsImg = document.getElementById("cloudsImg");
const getWeather = async(searchInput)=>{
    const response = await fetch(url+searchInput+`&appid=${apiKey}`);
    let jsonData = await response.json();
    console.log(jsonData);
    search.value="";
    city.textContent = jsonData.name;
    temp.textContent = Math.round(jsonData.main.temp)+"°c";
    humidity.textContent = jsonData.main.humidity+"%";
    wind.textContent = jsonData.wind.speed+" Km/h"
    if(jsonData.weather[0].main=="Clouds"){
        cloudsImg.src="images/clouds.png";
    }
    else if(jsonData.weather[0].main=="Mist"){
        cloudsImg.src="images/mist.png";
    }
    else if(jsonData.weather[0].main=="Rain"){
        cloudsImg.src="images/rain.png";
    }
    else if(jsonData.weather[0].main=="Clear"){
        cloudsImg.src="images/clear.png";
    }
    else if(jsonData.weather[0].main=="Drizzle"){
        cloudsImg.src="images/drizzle.png";
    }
}
userInput.addEventListener("click",function(){
    let searchInput = search.value;
    getWeather(searchInput);
})
function country(arg){
    let country = arg;
    getWeather(country);
}