

function StudentCard({name, age, course}){
    return(
        <div className="container">
            <h3>{name}</h3>
            <p>{age}</p>
            <p>{course}</p>

        </div>
    )
}

export default StudentCard;