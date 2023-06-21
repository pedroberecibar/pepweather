import React, { useState } from "react";
import Form from "./Form";
import Card from "./Card"; 

export default function WeatherPanel() {

    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=9884ea0077dd1dfcca1e714e80b3e93c&lang=es"
    let cityUrl = "&q="

    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=9884ea0077dd1dfcca1e714e80b3e93c&lang=es"

    const [weather, setWeather] = useState("")
    const [forecast, setForecast] = useState("")
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [location, setLocation] = useState("")

    async function getLocation(loc){
        setLoading(true)
        setLocation(loc)

        // Weather 

        urlWeather = urlWeather + cityUrl + loc

        await fetch(urlWeather).then((response)=>{
            if(!response.ok) throw {response}
            return response.json()
        }).then((weatherData) => {
            console.log(weatherData)
            setWeather(weatherData)
        }).catch(error => {
            console.log(error)
            setLoading(false)
            setShow(false)
        })

        // Forecast

        urlForecast = urlForecast + cityUrl + loc

        await fetch(urlForecast).then((response)=>{
            if(!response.ok) throw {response}
            return response.json()
        }).then((forecastData) => {
            console.log(forecastData)
            setForecast(forecastData)

            setLoading(false)
            setShow(true)

        }).catch(error => {
            console.log(error)
            setLoading(false)
            setShow(false)
        })

    }


    return(
        <React.Fragment>
            <Form 
                newLocation={getLocation}>
            </Form>

            <Card 
                showData = {show}
                loadingData = {loading}
                weather = {weather}
                forecast = {forecast}>
            </Card>
        </React.Fragment>
    )
}