function RengokuCard(props){
    return (
        <>
        <div className="card">
            <img src={props.image} alt="" />
            <p>{props.name}</p>
        </div>
        </>
    )
}

export default RengokuCard;