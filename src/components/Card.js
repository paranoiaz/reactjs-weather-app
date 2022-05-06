import React from "react";

export default function Card(props) {
    // value used for converting meters per second to kilometers per hour
    const convert_ms_to_kmh = 3.6;

    return (
        <React.Fragment>
            <div className="top-container">
                <div className="location-container">
                    {props.responseData.main ? <h1>{`${props.responseData.name}, ${props.responseData.sys.country}`}</h1> : null}
                </div>
                <div className="temperature-container">
                    {props.responseData.main ? <h2>{Math.floor(props.responseData.main.temp)}{props.unit === "metric" ? "°C" : "°F"}</h2> : null}
                </div>
                <div className="description-container">
                    {props.responseData.weather ? <h2>{props.responseData.weather[0].main}</h2> : null}
                </div>
            </div>
            {props.responseData.main !== undefined &&
                <div className="bottom-container">
                    <div className="humidity-container">
                        {props.responseData.main ? <p>{props.responseData.main.humidity}%</p> : null}
                        <p>Humidity</p>
                    </div>
                    <div className="wind-container">
                        {props.responseData.wind ? <p>{props.unit === "metric" ? `${Math.floor(props.responseData.wind.speed * convert_ms_to_kmh)} KMH` :
                            `${Math.floor(props.responseData.wind.speed)} MPH`}</p> : null}
                        <p>Wind Speed</p>
                    </div>
                </div>
            }
        </React.Fragment>
    );
}
