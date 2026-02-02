import React from "react";
import { useState } from "react";

function CounterList(){
    const [count , setCount] = useState(0);

    return(
        <div className="card">
            <p>{count}</p>
            <button onClick={()=>setCount(count + 1)}>+</button>
        </div>
    )
}

export default CounterList;