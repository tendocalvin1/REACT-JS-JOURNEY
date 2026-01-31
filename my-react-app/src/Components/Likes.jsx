
import React from "react";
import { useState } from "react";

function Likes(){
    const [likes, setLikes] = useState(0)
    return(
        <div>
            <button onClick={()=>setLikes(likes + 1)}>👍 {setLikes}</button>
            {likes}

        </div>
    )

}

export default Likes;