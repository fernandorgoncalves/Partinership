import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//Pages
<<<<<<< HEAD
import Home from './pages/Home.jsx'
import ComoFunciona from './pages/ComoFunciona.jsx'
import Contato from './pages/Contato.jsx'
import TelaDeLogin from './pages/TelaDeLogin.jsx'
=======
import Home from './pages/Home'
import ComoFunciona from './pages/ComoFunciona'
import Contato from './pages/Contato'
import TelaDeLogin from './pages/TelaDeLogin.jsx'
>>>>>>> 02e78a1790e33c71c0715924930817942ff60c9d

function App() {
  return (
    < Router>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/comofunciona" element={<ComoFunciona/>}></Route>
          <Route path="/contato" element={<Contato/>}></Route>
          <Route path="/login" element={<TelaDeLogin/>}></Route>
      </Routes>
    </Router>
  )
}
export default App