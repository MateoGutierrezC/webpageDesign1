import "../assets/css/Prototype.css"
import NavBar from "./NavBar"
import InfoText from "./InfoText"
import Footer from "./Footer"

function Prototype() {
    return (
        <div className="Prototype">
            <div className="NavBar">
                <NavBar></NavBar>
            </div>

            <div className="Info">
                <InfoText text="Build dynamic reports and forecasts"></InfoText>
            </div>

            <div className="Footer">
                <Footer></Footer>
            </div>

        </div>
    )
}

export default Prototype