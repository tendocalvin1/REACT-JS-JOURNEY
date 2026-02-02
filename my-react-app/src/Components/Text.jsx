import React from "react";
import { useState } from "react";

function Text(){
    const [word, setWord] = useState("Hello");
    
    return(
        <div className="card">
            <h3>{word}</h3>
            <button onClick={()=>setWord("Goodbye")}>word</button>
        </div>
    )
}

export default Text;