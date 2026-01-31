

function Elective({title, onEnroll}){
    return(
    <div className="container">
        <h2>{title}</h2>
        <button onClick={onEnroll}>Enroll</button>
    </div>

)
}

export default Elective;