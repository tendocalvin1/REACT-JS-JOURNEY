

function Cards({ title, description, buttonText, onButtonClick }){

    return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
}
   
export default Cards;