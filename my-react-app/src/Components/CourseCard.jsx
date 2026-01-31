

function CourseCard({title, instructor}){
    return(
        <div className="container">
            <h3>{title}</h3>
            <p>{instructor}</p>
        </div>
    )
}

export default CourseCard;