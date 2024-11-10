import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
//Pages
import Home from './pages/Home.jsx'
import ComoFunciona from './pages/ComoFunciona.jsx'
import Contato from './pages/Contato.jsx'

//Componente Footer
import Footer from '../src/components/Footer/Footer.jsx'


function App() {
  return (
    < Router>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/comofunciona" element={<ComoFunciona/>}></Route>
          <Route path="/contato" element={<Contato/>}></Route>
      </Routes>
    </Router>
  )
}
export default App
