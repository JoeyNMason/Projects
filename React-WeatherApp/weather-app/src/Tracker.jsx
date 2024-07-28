// useState is a React Hook that lets you add a state variable to your component.
import React, {useState} from 'react';

const WeatherApp = () => {
    const [city, setCity] = useState('');
    // state var will hold name of city. starts as empty string
    // setCity function to update city state var
    const [weatherData, setWeatherData] = useState(null);
    // state var will hold the weather data for city
    // starts as null cause no data init
    // setWeatherData function to update weatherData var
    const [error, setError] = useState(null);
    // state var will hold error messages. starts as null as no error init
    // setError function to update error state var

    
const getWeather = async (city) => {
    const apiKey = 'b3192f910bb0553aff48fda0e97706d8';
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const respone = await fetch(apiURL); 
        // wait for api response 
        const data = await response.json();
        // converts response to json format
        if (data.cod === 200){
            setWeatherData(data);
            // stores fetched data
            setError(null);
            // clears any prev error
        } else {
            setWeatherData(null);
            // clears any weather data
            setError('City not Found!');
            // sets error message
        }
    } catch (error){
        setWeatherData(null);
        setError('Error fetch the weather data.');
        console.error('Error fetching the weather data', error);
        // logs error for debbugging
    }
};

const handleSearchClick = () => {
    if(city){
        getWeather(city);
    }
};

return(
    <div className='container'>
        <div className='search-box'>
            <input 
            type='text' 
            id='city-input' 
            value={city} 
            onChange={(e) => setCity(e.target.value)}
            placeholder='Enter a City'
            />
            <button id='search-button' onClick={handleSearchClick}>Get Weather Data</button>
        </div>
        {error && <p>{error}</p>}
        {weatherData && (
            <div className='weather-info' style={{display: 'block'}}>
                <h2 id='city-name'>{weatherData.name}</h2>
                <p id='temperature'>Temperature: {weatherData.main.temp}°C</p>
                <p id='weather'>Weather: {weatherData.weather[0].description}</p>
            </div>
        )}
    </div>
    );
};

export default Tracker 