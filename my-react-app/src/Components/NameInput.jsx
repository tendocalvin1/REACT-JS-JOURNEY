
import { useState } from "react";

function NameInput(){
    const [name, setName] = useState("");
    return(
        <div>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
            <h2>{name}</h2>
        </div>
    )
}

export default NameInput;