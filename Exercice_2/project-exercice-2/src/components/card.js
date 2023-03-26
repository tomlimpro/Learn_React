export default function Card(props){
    console.log(props.period)
    return(
        <>
            <div className="card--container">
                <div className="card--block--image">
                    <img className="image" src={props.item.coverImg} alt="location"></img>
                </div>  
                <div className="card--block--infos">
                    <div class="infos--rows--country">
                        <p className="infos--country">{props.item.country}</p>
                        <a className="infos--googlelink"href={props.item.google_link}>Voir sur Google Maps !</a>
                    </div>
                    <div class="infos--rows--location">
                        <p className="infos--location">{props.item.location}</p>
                    </div>
                    <div className="infos--rows--period">
                        <p className="infos--period">{props.item.period}</p>
                    </div>
                    <div className="infos--rows--description">
                        <p className="infos--description">{props.item.description}</p>
                    </div>
                </div>  
            </div>
            <hr></hr>
        </>
    )
}