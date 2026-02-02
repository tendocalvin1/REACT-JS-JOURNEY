// Exercise 5 — Show/Hide Component
// Button toggles visibility of a component.

import React from "react";
import { useState } from "react";

function Hide(){
    const [color, setColor] = useState(false);

    return(
         <div style={{
        backgroundColor: color ? "yellow" : "yellowgreen",
        color: color ? "yellowgreen" : "yellow",
        height: "100vh",
      }}>
           <button onClick={() => setColor(!color)}>
        Change Color
      </button>
            
        </div>
    )
}

export default Hide;



