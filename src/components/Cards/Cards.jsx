import "./Cards.css"

function Cards(props){
    return(
        <div className="card " style={{backgroundImage: `url(/${props.image})`}}>

        </div>
    )
}
export default Cards;