import './App.css'
import '@splidejs/react-splide/css'
import { Layout } from './layout/Layout'
import { Home } from './pages/home/Home'
import { Routes, Route } from 'react-router-dom'
import { Pmv } from './pages/pvc/Pmv'
import { Plantillas } from './pages/plantillas/Plantillas'

function App() {

  return (      
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home/>} />
        <Route path="/PMV" element={<Pmv/>} />
        <Route path="/Plantillas" element={<Plantillas/>} />
      </Route>
    </Routes>
  )
}

export default App
