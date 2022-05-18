import React from "react";
import mickeyR from "../assets/mickeyR.png" 
import mickeyL from "../assets/mickeyL.png" 

function Choices() {
    return (
        <div className="choices">
          <img className="picture" id="yoursImg" src={mickeyR}/>
          <img className="picture" id="housesImg" src={mickeyL} />
          <span className="yoursHouse" id="playerChoice">You - </span>
          <span className="yoursHouse" id="houseChoice">House - </span>
        </div>
    )
}

export default Choices;