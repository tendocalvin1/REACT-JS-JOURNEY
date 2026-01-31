

function Movies({title, year, rating}){
    return(

        <div className="container">
            <h3>{title}</h3>
            <p>{year}</p>
            <p>{rating}</p>

        </div>
    )
}

export default Movies;