
import React from "react";
import { useState } from "react";

function CharacterCounter(){
    const [count, setCount] = useState(0)

    return(
        <div>
            <button onClick={()=>setCount(count + 1)}>Characters:</button>
            {count}
        </div>
    )
}

export default CharacterCounter;