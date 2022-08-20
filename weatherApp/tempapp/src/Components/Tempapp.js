import React from "react";
import "./css/style.css";
const Tempapp = () => {
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search"
                        className="inputfield"
                        value={""}
                        onChange={(event) => {

                        }} />
                </div>
            </div>
            <div className="info">
                <h2 className="location">
                    <i class="fas fa-street-view">HARSAR</i>
                </h2>
                <h1 className="temp">

                </h1>
                <h3 className="temp_max">Min : 5.25 cel | Max : 5.25 cel</h3>

            </div>
            <div className="wave"></div>
            <div className="wave-two"></div>
            <div className="wave-three"></div>
        </>
    )
}
export default Tempapp;