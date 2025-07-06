
const searchBtn = document.getElementById("button")
const cityInput = document.getElementById("city-input")
let CityName = document.getElementById("city-name")
let temp = document.getElementById("temp")
let windSpeed = document.getElementById("wind-speed")
let humidity = document.getElementById("humidity")
let weatherImg = document.getElementById("weather-img")


searchBtn.addEventListener("click", () => { 
    let cityName = cityInput.value
    getWeather(cityName)
    cityInput.value = ""
})


async function getWeather(cityName) {
    let city=cityName
    console.log(city)
    const apiKey ="fdfead5d66db4f9fb50da61e7c06cf62"
    const url =`https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`
    const response = await fetch(url)
    const data = await response.json()
    if(response.status!==200){
        document.querySelector(".err").style.display="block"
    document.querySelector(".weather").style.display = "none"
    }
    else{
        console.log(data)
    CityName.innerHTML = data.data[0].city_name
    temp.innerHTML = Math.round(data.data[0].temp) + "°C"
    windSpeed.innerHTML = Math.round(data.data[0].wind_spd) + " km/h"
    humidity.innerHTML = data.data[0].rh + " %"

    if( data.data[0].snow>0 ){
        weatherImg.src ="./images/snow.png"
    }
    else if(data.data[0].clouds < 40){
        weatherImg.src ="./images/clear.png"
    }
    else if(data.data[0].clouds <60 ){
        weatherImg.src ="./images/mist.png"
    }
    else if(data.data[0].clouds <80 ){
        weatherImg.src ="./images/rain.png"
    }
    else if(data.data[0].clouds <=100){
        weatherImg.src ="./images/clouds.png"
    }

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".err").style.display="none"
    }
}