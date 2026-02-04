// Exercise 2 — Counter List

// Have 5 counters rendered from an array.
// Each counter increments independently.
import React from "react";
import { useState } from "react";

const CountList = ()=>{
    const [count, setCount] = useState(0)

    return(
        <div className="card">
            <h3>{count}</h3>
            <button onClick={()=>setCount(count + 1)}>Add</button>
        </div>
    )
}

export default CountList;