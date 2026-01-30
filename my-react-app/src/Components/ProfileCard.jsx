

function ProfileCard({name, role, button}){
        return(
            <div className="container">
            <img src="/src/assets/ucu.png"></img>
            <h2>{name}</h2>
            <p>{role}</p>
            <button style={{display:"flex", margin:"0 auto", backgroundColor:"red"}}>{button}</button>
            </div>
        )
}

export default ProfileCard;