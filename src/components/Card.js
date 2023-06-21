import React from "react";
import Spinner from "./Spinner";


export default function Card({showData, loadingData, weather, forecast}) {

    var today = new Date()
    var day = today.getDate()
    var month = today.getMonth() + 1
    var year = today.getFullYear()
    var date = day + '/' + month + '/' + year 

    var url = ""
    var iconUrl = ""

    var iconUrl3 = ""
    var iconUrl6 = ""
    var iconUrl9 = ""
    var iconUrl12 = ""

    var forecastDate3 = ""
    var forecastDate6 = ""
    var forecastDate9 = ""
    var forecastDate12 = ""

    var forecastTime3 = ""
    var forecastTime6 = ""
    var forecastTime9 = ""
    var forecastTime12 = ""

    if(loadingData){
        return(
            <Spinner></Spinner>
        )
    }

    if(showData){
        url = "http://openweathermap.org/img/w/"
        iconUrl = url + weather.weather[0].icon + ".png"

        iconUrl3 = url + forecast.list[0].weather[0].icon + ".png"
        iconUrl6 = url + forecast.list[1].weather[0].icon + ".png"
        iconUrl9 = url + forecast.list[2].weather[0].icon + ".png"
        iconUrl12 = url + forecast.list[3].weather[0].icon + ".png"

        forecastDate3 = forecast.list[0].dt_txt.substring(8, 10) + '/' + forecast.list[0].dt_txt.substring(5, 7) + '/' + forecast.list[0].dt_txt.substring(0, 4)

        forecastDate6 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) 

        forecastDate9 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) 

        forecastDate12 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4)

        forecastTime3 = forecast.list[0].dt_txt.substring(11, 13)
        forecastTime6 = forecast.list[1].dt_txt.substring(11, 13)
        forecastTime9 = forecast.list[2].dt_txt.substring(11, 13)
        forecastTime12 = forecast.list[3].dt_txt.substring(11, 13)
    }

    return (
     
        <div className="mt-5">

            {
                showData === true ? (

                    <div className="container">
                        <div className="card mb-3 mx-auto bg-dark text-light">

                            <div className="row g-0">
                                <div className="col-md-4">
                                    <h1 className="card-title">{weather.name}</h1>
                                    <p className="card-date">{date}</p>
                                    <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}ºC</h1>
                                    <p className="card-desc"><img src={iconUrl} alt="icon"/>{weather.weather[0].description}</p>
                                    <img src="https://images.pexels.com/photos/4850559/pexels-photo-4850559.jpeg" alt=".." className="img-fluid rounded-start"/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-start mt-2">
                                        <h5 className="card-text">Temperatura Máxima: {(weather.main.temp_max - 273.15).toFixed(1)}ºC</h5>
                                        <h5 className="card-text">Temperatura Mínima: {(weather.main.temp_min - 273.15).toFixed(1)}ºC</h5>
                                        <h5 className="card-text">Sensación Térmica: {(weather.main.feels_like - 273.15).toFixed(1)}ºC</h5>
                                        <h5 className="card-text">Humedad: {weather.main.humidity}%</h5>
                                        <h5 className="card-text">Velocidad del viento: {((weather.wind.speed)*3.6).toFixed(1)} km/h</h5>
                                    </div>
                                    <hr />
                                    <div className="row g-0 mt-4">
                                        <div className="col">
                                            <p>{forecastDate3}</p>
                                            <p>{forecastTime3} hs</p>
                                            <p className="description"><img src={iconUrl3} alt="icon" /><br />{forecast.list[0].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[0].main.temp-273.15).toFixed(1)} ºC</p>
                                        </div>
                                        <div className="col">
                                            <p>{forecastDate6}</p>
                                            <p>{forecastTime6} hs</p>
                                            <p className="description"><img src={iconUrl6} alt="icon" /><br />{forecast.list[1].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[1].main.temp-273.15).toFixed(1)} ºC</p>
                                        </div>
                                        <div className="col">
                                            <p>{forecastDate9}</p>
                                            <p>{forecastTime9} hs</p>
                                            <p className="description"><img src={iconUrl9} alt="icon" /><br />{forecast.list[2].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[2].main.temp-273.15).toFixed(1)} ºC</p>
                                        </div>
                                        <div className="col">
                                            <p>{forecastDate3}</p>
                                            <p>{forecastTime3} hs</p>
                                            <p className="description"><img src={iconUrl12} alt="icon" /><br />{forecast.list[3].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[3].main.temp-273.15).toFixed(1)} ºC</p>
                                        </div>
                                        
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>

                ):(
                    <h2 className="text-light">
                        Sin datos disponibles
                    </h2>
                )
            }

        </div>

    )
}