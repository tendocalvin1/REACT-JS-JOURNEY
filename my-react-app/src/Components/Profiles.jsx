

function Profiles({name, occupation, aspiration}){
    return(
        <div className="card">
            <h3>{name}</h3>
            <p>{occupation}</p>
            <p>{aspiration}</p>
        </div>
    )
}

export default Profiles;