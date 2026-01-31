

function Courses({title, instructor, price}){
    return(

        <div className="container">
            <h3>{title}</h3>
            <p>{instructor}</p>
            <p>{price}</p>

        </div>
    )
}

export default Courses;