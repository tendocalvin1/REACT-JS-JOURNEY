// Exercise 5 — Show/Hide Component

// Button toggles visibility of a component.
import React from "react";
import { useState} from 'react'

const Visibility =() =>{
    const [isVisible, setIsVisible] = useState(true)


    function toggleVisibility(){
        setIsVisible(prev => !prev)
    }

    return(
        <div>
            <button onClick={toggleVisibility}>
                {isVisible ? 'Hide': 'Show'} Message
            </button>

            {
                isVisible && (
                <div style={{marginTop:'1rem', padding:'1rem', background:'#f4f4f4'}}>
                <h3>I am a software engineer and I want to make $80K to $120K per year.</h3>
            </div>
            )}
            


        </div>
    )

}

export default Visibility;