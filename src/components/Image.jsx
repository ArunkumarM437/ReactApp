function RengokuCard({
  image = "src/assets/213014.gif",
  imageDes = "Rengoku - Flame Hashira",
  quote = "No Matter What"
}) {
  return (
    <div className="card">
      <img src={image} alt={imageDes} />
      <p>{imageDes}</p>
      <p>{quote}</p>
    </div>
  );
}

export default RengokuCard;
