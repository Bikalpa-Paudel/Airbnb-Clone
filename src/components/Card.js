import "./Card.css"
import Star from "./Star.png"
export default function Card(props){
    let stats;
    if(props.stat === 1){
        stats = "Online"
    }
    else if (props.stat === 2){
        stats = "SOLD OUT"
    }
    return(

        <>
            <section className="card">
                <div className="card1">   
                    {props.stat && <div className="stat">
                        <div>{stats}</div>
                    </div>}
                    <img src={props.img} alt="first one" className="card1-img" />
                    <div className="rating">
                        <img src={Star} alt="star logo" className="star" />
                        <div className="rating1">{props.rating}</div>
                        <div className="country">'({props.ratingNum}) • USA</div>
                    </div>
                    <div className="title">{props.title}</div>
                    <div className="price">From ${props.price}<span>/ person</span></div>
                </div>
            </section>
        </>
    )
}