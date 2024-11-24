import Footer from "../components/Footer/Footer";
import Beneficios from "../components/Home/Beneficios/Beneficios";
import Presentation from "../components/Home/Presentation/Presentation";
import Header from "../components/Header/Header";
import Promo from "../components/Home/Promo/Promo";

function Home(){
    return (
        <>
            <Header/>
            <Presentation/>
            <Promo/>
            <Footer/>
        </>
    )
}
export default Home;