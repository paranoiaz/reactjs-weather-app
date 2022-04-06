import { useState } from "react";
import axios from "axios";

import config from "../config.js"
import Card from "./Card.js";

export default function Widget() {
    const [location, setLocation] = useState("");
    const [unit, setUnit] = useState("metric");
    const [responseData, setResponseData] = useState({});
    const url = `${config.ENDPOINT}?q=${location}&units=${unit}&appid=${config.KEY}`

    function searchLocation(event) {
        if (event.key === "Enter") {
            axios.get(url)
                .then((response) => {
                    setResponseData(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
            setLocation("");
        }
    }

    function switchUnit() {
        setUnit(unit === "metric" ? "imperial" : "metric")
        // reset data after unit change
        setResponseData({});
    }

    return (
        <div className="container">
            <div className="search-container">
                <label htmlFor="searchbox">Search for a city or country</label>
                <br />
                <input
                    id="searchbox"
                    type="text"
                    value={location}
                    onChange={event => setLocation(event.target.value)}
                    onKeyPress={searchLocation} />
                <br />
                <label htmlFor="checkbox">Imperial system </label>
                <input
                    id="checkbox"
                    type="checkbox"
                    onChange={switchUnit} />
            </div>
            <Card responseData={responseData} unit={unit} />
        </div>
    );
}