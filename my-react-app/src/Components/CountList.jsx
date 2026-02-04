// Exercise 2 — Counter List

// Have 5 counters rendered from an array.
// Each counter increments independently.
import React from "react";
import { useState } from "react";

const CountList = ({number})=>{
    const [count, setCount] = useState()

    return(
        <div className="card">
            <h3>{number}</h3>
            <button onClick={()=>setCount(count + 1)}>Add</button>
        </div>
    )
}

export default CountList;