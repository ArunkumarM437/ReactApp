function RengokuCard(props){
    return (
        <>
            <img src={props.image} alt="" />
            <p>{props.imageDes}</p>
        </>
    );
}
RengokuCard.defaultProps = {
    image : "src/assets/213014.gif",
    imageDes : "Rengoku - Flame Hashira"

}
export default RengokuCard;