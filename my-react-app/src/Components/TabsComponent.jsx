// Exercise 10 — Tabs Component

// 3 buttons: “Home”, “About”, “Contact”.
// Clicking shows different content.


import React from 'react';
import {useState} from 'react';

const TabsComponent =()=>{
 
    const [activeTab, setActiveTab] = useState("home")

    return(
        <div>
            <div>

            <button onClick={()=> setActiveTab("home")}>Home</button>
            <button onClick={()=> setActiveTab("about")}>About</button>
            <button onClick={()=> setActiveTab("contact")}>Contact</button>

            </div>

            <div>
                {activeTab === 'home' && <h2>Welcome to the home page</h2>}
                {activeTab === 'about' && 
                (<p>My name is Tendo Calvin and I am a software Engineer by profession with interests in
            web development and mobile app development. I love learning new technologies and building projects
            that solve real-world problems. Addition in the longer term, I aspire to become an expert in
            artificial intelligence and machine learning as well as content creation.</p>)}

                {activeTab === 'contact' && <h2>Contact: email@example.com</h2>}
            </div>

        </div>
    )
}

export default TabsComponent;