import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const CompA = () => {
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();
    const [pic, setpic] = useState();


    useEffect(() => {
        // alert("hey rupa")
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);

            setName(res.data.name);
            setMoves(res.data.moves.length);
            setpic(res.data.sprites.front_default);

        }
        getData();
    })


    return (
        <>


            <h1 className="first" > Get Pokémon  </h1>
            <div className="main">
                <h1 className="first1" > You choose <span>{num}</span> value</h1>
                <br />
                <h1 className="first2" >Hello my name is <span>{name}</span> </h1>
                <br />
                <h1 className="first3" >i have <span>{moves}</span> Power 🔥</h1>
            </div>

            <div className="main1">

                <NavLink src={pic}></NavLink>

                <input value={num} onChange={(event) => {
                    setNum(event.target.value)
                }} type="number" min="1"  >

                </input>
            </div>


        </>

    )
};
export default CompA;