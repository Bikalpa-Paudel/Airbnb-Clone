import "./Profile.css"
import Group from "./Group.png"
export default function Profile(){
    return(
        <>
            <div className="profile">
                <img src={Group} alt="profile images" />
            </div>
            <h1 className="experience">Online Experiences</h1>
            <p className="exp-para">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </>

    )

}
