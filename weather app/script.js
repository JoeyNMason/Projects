document.getElementById('search-button').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    if (city){
        getWeather(city);
    } 
});

function getWeather(city){
    const apiKey = ''; // API KEY
    const apiURL = ''; // enter api url

    fetch(apiURL)
        .then(response =>response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else{
                alert('City not found!');
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error)
        });
}

function displayWeather(data){
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const weather = document.getElementById('weather');

    cityName.textContent = data.name;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    weather.textContent = `Weather: ${data.weather[0].description}`;

    document.querySelector('.weather-info').style.display = 'block';
}