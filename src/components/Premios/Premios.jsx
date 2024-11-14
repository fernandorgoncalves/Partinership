import Cards from "../Cards/Cards";
import "./Premios.css"

function Premios(){
    return(
        <div className="grey-backgroud">
            <div className="container container-premios  d-flex jc-center fd-column">
                <div>
                    <h2>Premios</h2>
                </div>
                <div className=" d-flex jc-center fd-row jc-space-between">
                    <Cards image="mickey.svg"></Cards>  
                    <Cards image="mickey.svg"></Cards>  
                    <Cards image="mickey.svg"></Cards>
                </div>
            </div>
        </div>
    )
}
export default Premios;