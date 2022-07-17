import React from "react";
import Search from "./components/Search";
import './App.css';
import CurrentWeather from "./components/CurrentWeather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./components/api";
import Forecast from "./components/Forecast";


export default function App() {



    //to get current location
    React.useEffect(() => {

        let latitude
        let longitude
        let CurrentLocation
        

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            }
        }

        function showPosition(position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            

            fetch("https://ipinfo.io/json?token=138c30126e62fe").then(
                (response) => response.json()
            ).then(
                (data) => {
                    CurrentLocation = {
                        value: `${latitude} ${longitude}`,
                        label: `${data.city}, ${data.country}`
                    }


                    handleOnSearchChange(CurrentLocation);

                }
            )



        }

        getLocation();

    }, []);










    const [currentWeather, setCurrentWeather] = React.useState(null);

    const [forecast, setForecast] = React.useState(null);

    function handleOnSearchChange(searchData) {
        const [lat, lon] = searchData.value.split(" ");

        const CurrentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

        const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)


        Promise.all([CurrentWeatherFetch, forecastFetch])
            .then(async (response) => {
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
            .catch(error => {
                console.log(error);
            })
    }

    

    return (
        <div className="container">
            <Search
                onSearchChange={handleOnSearchChange}
            />
            {currentWeather && <CurrentWeather {...currentWeather} />}
            {forecast && <Forecast {...forecast} />}
        </div>
    )
}