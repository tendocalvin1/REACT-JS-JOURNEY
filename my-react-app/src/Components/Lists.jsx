// Exercise 4 — Products List

// Array of products. Render with keys.
// Each has a “Delete” button that removes it from the list.

import React from "react";
import { useState } from "react";

const CarsList = ({vehicles})=>{
    const [cars, setCars] = useState()

    function deleteCar(){
        setCars(vehicles.filter((item)=>item.id !== vehicles.id))
    }

    return(
        <div className="container">
            <h3>{cars}</h3>
            <button onClick={()=>deleteCar}>Delete Item</button>
        </div>
    )
}

export default CarsList;