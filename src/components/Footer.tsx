import "../assets/css/Footer.css"
import ParaGraph from "./Paragraph"
import { AiOutlineArrowRight } from "react-icons/ai"
function Footer() {
    return (
        <footer>

            <div className="Demo">

                <a className="Demo__Link" href="#">Book a demo</a>
                <div className="Demo__Text">
                    <ParaGraph text="The business planning platform for forward-thinking organizations"></ParaGraph>
                </div>

            </div>

            <div className="Learn__More">

                <div className="Learn__More-Text">
                    <ParaGraph text="What's new! Getbell is now live!  "></ParaGraph>
                </div>

                <a className="Learn__More-Link" href="#">__________________ Learn More <AiOutlineArrowRight/></a>

            </div>

        </footer>
    )
}

export default Footer