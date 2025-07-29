function RengokuCard(props){
    return (
        <>
            <img src={props.image} alt="" />
            <p>{props.name}</p>
        </>
    )
}

export default RengokuCard;