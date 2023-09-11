import "../assets/css/Paragraph.css"
interface ParaGraph{
    text:string
}

function ParaGraph({text}:ParaGraph){
    return(
        <p>{text}</p>
    )
}

export default ParaGraph