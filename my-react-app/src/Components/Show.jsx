// This is how modals, menus, dropdowns work.

import  {useState} from 'react';
import React  from 'react';

function Toggle(){
    const [show, setShow] = useState(true)
    return(
        <div>
            <button onClick={()=> setShow(!show)}>Toggle</button>
            {show && <p>This text can disappear</p>}
        </div>
    )
}

export default Toggle;