export default function CurrentWeather(props) {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{props.city}</p>
                    <p className="desc">{props.weather[0].description}</p>
                </div>
                <img src={`icons/${props.weather[0].icon}.png`} alt="" className="weatherImg" />
            </div>

            <div className="bottom">
                <p className="temp">{(props.main.temp).toFixed(0)}<span className='celcius'>°C</span></p>
                <p className="range">({props.main.temp_max} - {props.main.temp_min})°C</p>
                <div className="details">
                    <div >
                        <p className="paramLabel deta">Details</p>
                    </div>
                    <div className="paramRow">
                        <span className="paramLabel">Feels Like</span>
                        <span className="paramValue"> {(props.main.feels_like).toFixed(1)}°C </span>
                    </div>
                    <div className="paramRow">
                        <span className="paramLabel">Wind</span>
                        <span className="paramValue"> 2 m/s</span>
                    </div>
                    <div className="paramRow">
                        <span className="paramLabel">Humidity</span>
                        <span className="paramValue"> {props.main.humidity}% </span>
                    </div>
                    <div className="paramRow">
                        <span className="paramLabel">Pressure</span>
                        <span className="paramValue"> {props.main.pressure} Pa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}