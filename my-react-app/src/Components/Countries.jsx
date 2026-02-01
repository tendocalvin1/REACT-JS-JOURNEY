// Drill 1
// Render an array of 5 countries as <li> inside a <ul> with keys.



function Countries({territory}){
    return(
        <div className="container">
            <li>{territory}</li>
        </div>
    )
}

export default Countries;