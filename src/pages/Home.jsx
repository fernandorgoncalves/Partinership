import Footer from "../components/Footer/Footer";
import Beneficios from "../components/Home/Beneficios/Beneficios";
import Presentation from "../components/Home/Presentation/Presentation";
import Header from "../components/Header/Header";
import Promo from "../components/Home/Promo/Promo";
import Carrossel from "../components/Carrousel/Carrossel";


function Home(){
    return (
        <>
            <Header/>
            <Carrossel/>
            <Presentation/>
            <Promo/>
            <Footer/>
        </>
    )
}
export default Home;