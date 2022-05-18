import React from "react";

function Buttons() {
    return (
        <div>
            <div id="yourChoice" className="buttons">
                <button className="button" onclick="yourFunction('rock')">rock</button>
                <button className="button" onclick="yourFunction('paper')">paper</button>
                <button className="button" onclick="yourFunction('scissors')">scissors</button>
            </div>
            <div className="reset">
                <button className="resetButton" id="reset" onclick="resetGame()">reset</button>
            </div>
        </div>
    )
}

export default Buttons;