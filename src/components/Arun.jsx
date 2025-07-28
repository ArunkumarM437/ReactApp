import { useState } from "react";
import RengokuCard from "./Image";

function Arun() {

    const [name, setName] = useState("Welcome From Arunkumar M")
    return (
        <>
            <div className="card">
                {name != "Rengoku" && (
                    <button onClick={() => setName((name) => name = "Rengoku")}>
                        Click Me
                    </button>
                )}
                {name === "Rengoku" && (
                    // <img src="https://giffiles.alphacoders.com/222/222573.gif" alt="Rengoku" />
                    <>
                        <RengokuCard image="src\assets\213014.gif" name="Rengoku Fire" />
                        <RengokuCard image="src\assets\219718.gif" name="Rengoku Fight" />
                        <RengokuCard image="src\assets\221754.gif" name="Rengoku Scorching Sun" />
                        <RengokuCard image="src\assets\223505.gif" name="Rengoku Flame" /></>
                )}

            </div>
        </>
    )
}

export default Arun