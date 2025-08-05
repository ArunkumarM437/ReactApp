import { useState } from "react";
import RengokuCard from "./Image";

function Arun() {

    const [name, setName] = useState("Welcome From Arunkumar M")
    return (
        <>
            {name != "Rengoku" && (
                <button onClick={() => setName((name) => name = "Rengoku")}>
                    Go Beyound Your Limits
                </button>
            )}
            {name === "Rengoku" && (
                <div className="rengoku-section">
                    <div className="card-wrapper">
                        <RengokuCard image="src/assets/images/213014.gif" imageDes="Rengoku Fire" show={true} />
                        <RengokuCard image="src/assets/images/219718.gif" imageDes="Rengoku Fight" />
                        <RengokuCard image="src/assets/images/221754.gif" />
                        <RengokuCard image="src/assets/images/223505.gif" />
                        <RengokuCard image="src/assets/images/223505.gif" show={true}/>
                        <RengokuCard image="src/assets/images/223505.gif" />
                        <RengokuCard image="src/assets/images/223505.gif" />
                        <RengokuCard image="src/assets/images/223505.gif" />
                        <RengokuCard quote="Umai" show={true} />
                    </div>
                </div>

            )}
        </>
    )
}

export default Arun