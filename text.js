const apikey = "be8bd7472bd4eecd75df0b3432d166ea";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=matric&q=";


const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const backgroundImg = document.querySelector(".main1");
const crossbtn = document.querySelector(".crosbtn");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".country").innerHTML = data.sys.country;
    document.querySelector(".city").innerHTML = data.name;
    var cel = data.main.temp - 273.15;
    document.querySelector(".temp").innerHTML = Math.round(cel) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.getElementById("main1").style
    let weather = data.sys.sunrise

    
    var time = getHourForTimezone(data.timezone);
    console.log(time)
    if (data.weather[0].main == "Clouds") {
        if (time >= 6 && time <= 18) {
            weatherIcon.src = "clouds.png"
        }
        else
            weatherIcon.src = "moonclouds.png"


    }
    else if (data.weather[0].main == "Clear") {

        if (time >= 6 && time <= 18) {
            weatherIcon.src = "clear.png"
        }
        else
            weatherIcon.src = "nightclear.png"

    }
    else if (data.weather[0].main == "Rain") {
        if (time >= 6 && time <= 18) {
            weatherIcon.src = "rain.png"
        }
        else
            weatherIcon.src = "nightrain.png"

    }
    else if (data.weather[0].main == "Drizzle") {
        if (time >= 6 && time <= 18) {
            weatherIcon.src = "drizzle.png"
        }
        else
            weatherIcon.src = "dizzelnight.png"

    }
    else if (data.weather[0].main == "Mist") {
        if (time >= 6 && time <= 18) {
            weatherIcon.src = "mist.png"

        }
        else
            weatherIcon.src = "nightmist.png"

    }
    else if (data.weather[0].main == "Snow") {
        if (time >= 6 && time <= 18) {
            weatherIcon.src = "snow.png"


        }
        else
            weatherIcon.src = "nightsnow.png"

    }



}
// Enter press Key function 
searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
});


searchbox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchbox.value);
    }
});
// Cross button function 
crossbtn.addEventListener('click', () => {
    searchbox.value = '';
})

searchbox.addEventListener('input', () => {
    clearButton.display = 'none';
});


var city = "karachi"
checkWeather(city);
searchbtn.addEventListener("click", () => {

    checkWeather(searchbox.value);
})



function getHourForTimezone(offsetInSeconds) {
    const date = new Date(Date.now() + (offsetInSeconds * 1000));
    const hour = date.getUTCHours(); // Use getUTCHours to get the UTC hour
    return hour;
}



