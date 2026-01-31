
import React from "react";
import { useState } from "react";

function DarkMode(){
    const [dark, setDark] = useState(false)

    return(
        <div style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
        height: "100vh",
      }}>
           <button onClick={() => setDark(!dark)}>
        Toggle Mode
      </button>
            
        </div>
    )
}

export default DarkMode;