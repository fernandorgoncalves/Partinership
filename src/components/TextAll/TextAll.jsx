import "./TextAll.css"

function TextAll(props){
    return(
        <div>
            <div className="text">{props.text}</div>
            <div className="textp">{props.textp}</div>
        </div>
    )
}
export default TextAll;