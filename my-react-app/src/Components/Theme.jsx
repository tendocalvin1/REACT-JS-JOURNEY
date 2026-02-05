// Exercise 8 — Theme Switcher

// Button toggles dark/light mode using state.[black and white colors are the ones am using]

import React from "react";
import { useState } from "react";

const Theme =()=>{
    const [color, changeColor] = useState(false)  //start light; flip as needed

    const ToggleTheme =()=>{
        changeColor(prev => !prev)
    }

    const styles = {
        backgroundColor : color ? 'black': 'white',
        color: color ? 'white': 'black',
        padding: '1rem',
        marginTop: '1rem',
        border: '1px solid greenyellow'
    }

    return(
        <div>
            <button onClick={ToggleTheme}>
                {color ? 'Switch to Light':'Switch to Light'} Mode
            </button>

        

        </div>
    )
}

export default Theme;