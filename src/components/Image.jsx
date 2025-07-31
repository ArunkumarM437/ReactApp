function RengokuCard({
  image = "src/assets/images/213014.gif",
  imageDes = "Rengoku - Flame Hashira",
  quote = "No Matter What",
  show = false
}) {
  if (show == true) {
    return (
      <div className="card">
        <img src={image} alt={imageDes} />
        <p>{imageDes}</p>
        <p>{quote}</p>
      </div>
    );
  }else{
    return(
       <div className="card">
        <img src="src\assets\images\akaza.gif" alt="Akaza" />
        <p>"Orini Nara Nai"</p>
        <p>"Rengoku Not Available"</p>
      </div>
    );
  }

}

export default RengokuCard;
