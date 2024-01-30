

const apiKey = "9082f7a32267d8af85b436eefdbc2c3d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".input_text");
const searchbtn = document.querySelector(".button_click");



async function check_weather(city){
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

// check_weather(searchBox.value);

searchbtn.addEventListener("click"  , ()=>{
    check_weather(searchBox.value);
})

