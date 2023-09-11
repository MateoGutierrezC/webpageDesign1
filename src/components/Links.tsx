import "../assets/css/Links.css"
interface Links{
    text:string
}

function Links({text}:Links){
    return(
        <a className="Link" href="">{text}</a>
    )
}

export default Links