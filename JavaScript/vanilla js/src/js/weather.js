const weather = document.querySelector(".js-weather");
const API_KEY = "45c62c9b9ea1dcc1b88e0a586c4a406b";
const COORDS = 'coords';

function getWeather(lat, lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        ).then(function(response){
           return response.json();
        }).then(function(json){
            const temperature = (json.main.temp/10).toFixed(1);
            const place = json.name;
            weather.innerText = `${temperature}C @ ${place}`;
        });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    // console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    console.log(coordsObj,"123");
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Cant access geo location");
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords===null){
        askForCoords();
    }else{
        //getweather
        const parseCoods = localStorage.getItem(COORDS);
        const weatherObj = JSON.parse(parseCoods);
        console.log(weatherObj);
        getWeather(weatherObj.latitude, weatherObj.longitude);
    }
}

function init(){
    loadCoords();
}
init();