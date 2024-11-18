import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Premios from "../components/Premios/Premios";
import Presentation from "../components/Presentation/Presentation"
import Promo from "../components/Promo/Promo";


function Home(){
    return (
        <div>
            <Header/>
            <Presentation/>
            <Promo/>
            <Premios classname="container"/>
            <Footer/>
        </div>
    )
}
export default Home;