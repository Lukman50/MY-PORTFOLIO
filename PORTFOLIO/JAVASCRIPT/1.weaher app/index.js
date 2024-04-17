const apiKey = "d8217cdf349524da2f7d5fcefab1c11c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    // if (response.status == 404) {
    //     document.querySelector('.error').style.display = 'block';
    //     document.querySelector('.weather').style.display = 'none';
    // } else {
    //     document.querySelector('.error').style.display = 'none';
    // }
    
    switch (response.status) {
        case 404:
          document.querySelector('.error').style.display = 'block';
          document.querySelector('.weather').style.display = 'none';
          break;
        default:
          document.querySelector('.error').style.display = 'none';
      }

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';

    // if(data.weather[0].main == 'Clouds'){
    //     weatherIcon.src = "images/clouds.png";
    // }else  if(data.weather[0].main == 'Clear'){
    //     weatherIcon.src = 'images/clear.png';
    // }else  if(data.weather[0].main == 'Rain'){
    //     weatherIcon.src = 'images/rain.png';
    // }else  if(data.weather[0].main == 'Drizzle'){
    //     weatherIcon.src = 'images/drizzle.png';
    // }else  if(data.weather[0].main == 'Mist'){
    //     weatherIcon.src = 'images/mist.png';
    // }

    switch (data.weather[0].main) {
        case 'Clouds':
          weatherIcon.src = 'images/clouds.png';
          break;
        case 'Clear':
          weatherIcon.src = 'images/clear.png';
          break;
        case 'Rain':
          weatherIcon.src = 'images/rain.png';
          break;
        case 'Drizzle':
          weatherIcon.src = 'images/drizzle.png';
          break;
        case 'Mist':
          weatherIcon.src = 'images/mist.png';
          break;
        default:

    }




    document.querySelector('.weather').style.display = 'inline-block';
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
  });
  
  searchBox.addEventListener('keypress', (event) => {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === 'Enter') {
      checkWeather(searchBox.value);
    }
  });


// https://api.openweathermap.org/data/2.5/weather?q=germany&appid=d8217cdf349524da2f7d5fcefab1c11c&units=metric