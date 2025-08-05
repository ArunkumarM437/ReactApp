import { useState } from "react";
import RengokuList from "./Rengoku/RengokuListView";

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
                        <RengokuList/>
                    </div>
                </div>

            )}
        </>
    )
}

export default Arun