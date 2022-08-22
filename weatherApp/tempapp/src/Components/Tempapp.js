import React, { useEffect, useState } from "react";
import "./css/style.css";
const Tempapp = () => {
    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("Shimla")

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=92d9aa00fb150473bb879502d32325cd`
            const response = await fetch(url)
            const resJson = await response.json()
            // console.log(resJson);
            setCity(resJson.main)

        }
        fetchApi()
    }, [search])
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        value={search}
                        type="search"
                        className="inputfield"
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }} />
                </div>


                {!city ? (
                    <p>No Data Found</p>
                ) : (<div> <div className="info">
                    <h2 className="location">
                        <i className="fas fa-street-view"></i>{search}
                    </h2>
                    <h1 className="temp">
                        {city.temp}°Cel
                    </h1>
                    <h3 className="tempmin_max">Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>
                </div>
                    <div className="wave_one"></div>
                    <div className="wave_two"></div>
                    <div className="wave_three"></div>
                </div>)
                }


            </div>
        </>
    )
}
export default Tempapp;