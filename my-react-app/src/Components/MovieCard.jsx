

function MovieCard({name, year}){
    return(
        <div className="container">
        <h3>{name}</h3>
        <p>{year}</p>

        </div>
        
    )
}

export default MovieCard;