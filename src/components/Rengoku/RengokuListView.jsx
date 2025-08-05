import RengokuCard from "../RengokuCard";
function RengokuList() {
    const RengokuDetails = [
        {
            image: "src/assets/images/213014.gif",
            imageDes: "Rengoku Fire",
            show: true
        },
        {
            image: "src/assets/images/219718.gif",
            imageDes: "Rengoku Fight"
        },
        {
            image: "src/assets/images/221754.gif"
        },
        {
            image: "src/assets/images/223505.gif"
        },
        {
            image: "src/assets/images/223505.gif",
            show: true
        },
        {
            image: "src/assets/images/223505.gif"
        },
        {
            image: "src/assets/images/223505.gif"
        },
        {
            image: "src/assets/images/223505.gif"
        },
        {
            quote: "Umai",
            show: true
        }
    ]
    const RengokuListItem = RengokuDetails.map((rengoku)=> <RengokuCard image={rengoku.image} imageDes={rengoku.imageDes} quote={rengoku.quote} show={rengoku.show}/>)
    return (
        <>
            {RengokuListItem}
        </>
    )
};

export default RengokuList;