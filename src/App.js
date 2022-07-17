import React from "react";
import Search from "./components/Search";
import './App.css';
import CurrentWeather from "./components/CurrentWeather";
import { WEATHER_API_KEY,WEATHER_API_URL } from "./components/api";
import Forecast from "./components/Forecast";


export default function App() {

    const [currentWeather, setCurrentWeather] = React.useState(null);

    const [forecast , setForecast] = React.useState(null);

    function handleOnSearchChange(searchData) {
        const [lat, lon] = searchData.value.split(" ");
       
        const CurrentWeatherFetch=fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

        const forecastFetch= fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)


        Promise.all([CurrentWeatherFetch,forecastFetch])
        .then(async (response)=>{
            const weatherResponse = await response[0].json();
            const forecastResponse = await response[1].json();

            setCurrentWeather({
                city: searchData.label,
                ...weatherResponse
            });
            setForecast({
                city: searchData.label,
                ...forecastResponse
            });

        })
        .catch(error=>{
            console.log(error);
        })
    }

    console.log(currentWeather);
    console.log(forecast);

  return (
    <div className="container">
        <Search 
        onSearchChange={handleOnSearchChange}
        />
        { currentWeather &&<CurrentWeather {...currentWeather}/>}
        { forecast && <Forecast {...forecast}/>}
    </div>
  )
}