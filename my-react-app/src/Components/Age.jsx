

function Age(number){

    if(number >= 18){
        console.log("Adult");
    }else{
        console.log("Minor")
    }

    return(
        <>
        <h2>You are a {number}</h2>
        </>
    )
    
}

export default Age;