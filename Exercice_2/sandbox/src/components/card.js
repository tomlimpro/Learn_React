export default function Card(props){
    let badgeText
    if (props.data.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.data.location === "Online") {
        badgeText = "ONLINE"
    }
    return(
        <>
            <div className="card--container">
                {{badgeText} && <div className="card--badge">{badgeText}</div>}
                <img className="card--image" src={props.data.coverImg} alt="katie"></img>
                <div className="card--stats">
                    <img className="card--star" src="./image/star.png" alt="star"></img>
                    <span>{props.data.stats.rating}</span>
                    <span className="gray">({props.data.stats.reviewCount}) •</span>
                    <span className="gray">{props.data.country}</span>
                </div>
                <p className="card--title">{props.data.title}</p>
                <p className="card--price"><span className="bold">From {props.data.price}€</span> / persons</p>
            </div>
        </>
    )
}