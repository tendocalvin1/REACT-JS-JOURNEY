import React from "react";
import { useState } from "react";

function Numbers(){
    const [numbers, setNumbers] = useState([1,2,3,4,5,6,7,8,9,10])

    function removeFirst(){
        setNumbers(numbers.slice(1))
    }

    return(
        <div>
            <button onClick={removeFirst}>Remove First</button>

            <ul>
                <li>{numbers.map((item, index)=>(
                    <li key={index}>{item}</li>
                ))}</li>
            </ul>
        </div>
    )
}

export default Numbers;