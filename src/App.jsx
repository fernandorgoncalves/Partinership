import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//Pages

import Home from './pages/Home.jsx'
import ComoFunciona from './pages/ComoFunciona.jsx'
import Contato from './pages/Contato.jsx'
import TelaDeLogin from './pages/TelaDeLogin.jsx'
import Dashuserc from './pages/Dashuser.jsx'
import Dashboard from './pages/Dashboard.jsx'

function App() {
  return (
    < Router>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/comofunciona" element={<ComoFunciona/>}></Route>
          <Route path="/contato" element={<Contato/>}></Route>
          <Route path="/login" element={<TelaDeLogin/>}></Route>
          <Route path="/dashpanel" element={<Dashboard/>}></Route>
          <Route path="/dashuser" element={<Dashuserc/>}></Route>
      </Routes>
    </Router>
  )
}
export default App