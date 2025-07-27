import { useState } from "react";

function Arun() {

    const [name, setName] = useState("Welcome From Arunkumar M")
    return (
        <>
            <div className="card">
                {name !="Rengoku" && (
                <button onClick={() => setName((name) => name = "Rengoku")}>
                    Click Me
                </button>
                )}
                {name === "Rengoku" && (
                    <img src="https://giffiles.alphacoders.com/222/222573.gif" alt="Rengoku" />
                )}
            </div>
        </>
    )
}

export default Arun