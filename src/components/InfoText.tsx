import "../assets/css/InfoText.css"

interface Info{
    text: string
}

function InfoText({text}:Info) {
    return(
        <p className="Info__Text">{text}</p>
    )
}
export default InfoText