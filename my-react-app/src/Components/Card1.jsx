

function Card1({title, description, buttonText}){
    return (
        <div className="card">
            <img src="/src/assets/ucu.png"></img>
            <h2>{title}</h2>
            <p>{description}</p>
            <button style={{display:"block", margin:"0 auto", backgroundColor:"whitesmoke"}}>{buttonText}</button>

        </div>
    )
}

export default Card1;