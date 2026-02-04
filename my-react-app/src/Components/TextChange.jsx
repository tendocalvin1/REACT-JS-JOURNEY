// Exercise 3 — Toggle Text

// Button switches text between “Hello” and “Goodbye” using state.

import React from "react";
import { useState } from "react";

function TextChange(){
    const [word, changeWord] = useState("Hello");

    return(
        <div className="container">
            <h3>{word}</h3>
            <button onClick={()=>changeWord("Goodbye")}>Toggle Text</button>
        </div>
    )

}

export default TextChange;

