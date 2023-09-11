import "../assets/css/NavBar.css"
import Links from "./Links"
import ParaGraph from "./Paragraph"
import Logo from "./Logo"

function NavBar() {
    return (
        <nav>

            <div className="Navbar__Menu">

                <Logo />
                <Links text="Product" />
                <Links text="Use Cases" />
                <Links text="Customers" />
                <Links text="Intregrations" />
                <Links text="Plans" />

            </div>


            <div className="Navbar__SignIn">
                <div className="NavBar__Paragraph">
                    <ParaGraph text="Get a full-spectrum view of your business. Model any scenario" />
                </div>
                <a className="SignIn__Button" href="">Sing In</a>

            </div>

        </nav>
    )
};


export default NavBar
