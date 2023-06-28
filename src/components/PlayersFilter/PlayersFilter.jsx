import React from "react";
import { getPlayersCountry, getPlayersTeams, getPlayersHeight } from "../../redux/actions/playersFilter";

function PlayersFilter(){
    const handlePlayersCountry = (event) => {
        event.preventDefault();
        dispatch(getPlayersCountry(event.target.value));
    };
    const handlePlayersTeams = (event) => {
        event.preventDefault();
        dispatch(getPlayersTeams(event.target.value));
    };
    const handlePlayersHeight = (event) => {
        event.preventDefault();
        dispatch(getPlayersHeight(event.target.value));
    };
    return(
        <div>
            <select onChange={(event) => handlePlayersCountry(event)}>
                <option value="country">JUGADORES POR PAIS</option>
            </select>
            <select onChange={(event) => handlePlayersHeight(event)}>
                <option value="height">JUGADORES POR ALTURA</option>
            </select>
            <select onChange={(event) => handlePlayersTeams(event)}>
                <option value="team">JUGADORES POR EQUIPO</option>
            </select>
        </div>
    )
}

export default PlayersFilter;