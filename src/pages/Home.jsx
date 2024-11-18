import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Premios from "../components/Premios/Premios";
import Presentation from "../components/Presentation/Presentation"
import Promo from "../components/Promo/Promo";


function Home(){
    return (
        <>
            <Header/>
            <Presentation/>
            <Premios classname="container"/>
            <Footer/>
        </>
    )
}
export default Home;