import React, {useState} from "react";

export default function Form({newLocation}){
    const [city, setCity] = useState("")

    function onSubmit(e){
        e.preventDefault()
        console.log({city})
        if(city === "" || !city) return

        newLocation(city)
    }

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3 mx-auto">
                    <input type="text" className="form-control" placeholder="Ciudad" onChange={(e) => setCity(e.target.value)}/>
                    <button className="btn btn-primary input-group-text" type="submit">Buscar</button>
                </div>
            </form>

        </div>
    )
}