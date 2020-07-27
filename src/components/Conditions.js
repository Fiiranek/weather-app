import React from 'react'
import Error from './Error'

export default function Conditions(props) {

    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div >
        {props.data.cod === 200 ? 
            <div className="conditions">
        <h1><i className="fas fa-map-marker-alt icon"></i> {props.data.name}, {props.data.sys.country}</h1>
        <img id="weatherIcon" src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt=""/>
            <h1>{capitalize(props.data.weather[0].description)}</h1>
            <h1>{Math.round(props.data.main.temp,2)} °C</h1>
            <input type="text" id="cityID" placeholder="City name..." onChange={props.changeCityID}/>
            <br/>
            <button id="forecastBtn" onClick={props.getData}>Get forecast</button>
            </div>
            : 
           <Error/>
        }
        </div>
    )
}
