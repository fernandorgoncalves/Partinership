import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
//Pages
import Home from './pages/Home'
import ComoFunciona from './pages/ComoFunciona'
import Contato from './pages/Contato'


function App() {
  return (
    < Router>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/comofunciona" element={<ComoFunciona/>}></Route>
          <Route path="/contato" element={<Contato/>}></Route>
      </Routes>
    </Router>
  )
}
export default App
