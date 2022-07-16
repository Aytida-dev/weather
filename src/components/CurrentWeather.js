export default function CurrentWeather(props) {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{props.city}</p>
                    <p className="desc">{props.weather[0].description}</p>
                </div>
                <img src="icons/01d.png" alt="" className="weatherImg" />
            </div>

            <div className="bottom">
                <p className="temp">18c</p>
                <div className="details">
                    <div >
                        <p className="paramLabel deta">details</p>
                    </div>
                    <div className="paramRow">
                        <span className="paramLabel">feels like</span>
                        <span className="paramValue"> 22c </span>
                    </div>
                    <div className="paramRow">
                        <span className="paramLabel">wind</span>
                        <span className="paramValue"> 2 </span>
                    </div>
                    <div className="paramRow">
                        <span className="paramLabel">humidity</span>
                        <span className="paramValue"> 12% </span>
                    </div>
                    <div className="paramRow">
                        <span className="paramLabel">pressure</span>
                        <span className="paramValue"> 40 </span>
                    </div>
                </div>
            </div>
        </div>
    )
}