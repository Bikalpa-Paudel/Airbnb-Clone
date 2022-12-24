import "./Card.css"
import Image1 from "./image1.png"
import Star from "./Star.png"
export default function Card(){
    return(

        <>
            <section className="card">
                <div className="card1">
                    <img src={Image1} alt="first one" className="card1-img" />
                    <div className="rating">
                        <img src={Star} alt="star logo" className="star" />
                        <div className="rating1">5.0</div>
                        <div className="country">(6) • USA</div>
                    </div>
                    <div className="title">Life lessons with Katie Zaferes</div>
                    <div className="price">From $136 <span>/ person</span></div>
                </div>
            </section>
        </>
    )
}