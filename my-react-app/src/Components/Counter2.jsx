// State + Props (real React)

import { useState } from "react";

function Counter2(){
const [count, setCount] = useState(0)
    return(
        <div>
            <button onClick={()=>setCount(count + 1)}>Count</button>
            {count}
        </div>
    )
}

export default Counter2;