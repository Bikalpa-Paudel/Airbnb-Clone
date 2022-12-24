import "./Navbar.css"
import Logo from "./Vector.png"

export default function Navbar(){
    return(
        
        <>
            <nav className="nav">
                <div className="logo"><img src={Logo} alt="Airbnb logo" /></div>
            </nav>
        </>
    )
}