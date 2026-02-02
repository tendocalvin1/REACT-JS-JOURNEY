// Exercise 6 — Dynamic Greeting

// Input field.
// As user types name → UI updates live: “Hello, [name]”.


import React from "react";
import { useState } from "react";

function Greeting(){
    const [name, setName] = useState("");
    return(
        <div className="card">
            <h3>Hello, {name}</h3>
            <input
            type="text"
            placeholder="Enter your name"
            value={name}

            onChange={(e) => setName(e.target.value)}
            />
        </div>
    )
}   

export default Greeting;

