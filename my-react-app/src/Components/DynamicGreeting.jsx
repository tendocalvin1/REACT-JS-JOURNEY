// Exercise 6 — Dynamic Greeting
// Input field.
// As user types name → UI updates live: “Hello, [name]”.

// Core concepts tested: useState for holding input value, 
// onChange event handler on <input>, one-way data flow (input → state → rendered output).
// useState is used to store the current value of the input field.
// An onChange handler updates this state as the user types.
// The UI reflects the current state by displaying a greeting with the entered name.

import React from "react";
import { useState } from "react";


const DynamicGreeting =()=>{
    const [name, setName] = useState('')


    return(
        <div className="container">
            <h3>Hello ,{name || 'there'}</h3>
            <input 
            placeholder="Enter your name please"
            type="text"
            onChange={(e)=>setName(e.target.value)}
            required

            
            />

            
        </div>
    )
}

export default DynamicGreeting;