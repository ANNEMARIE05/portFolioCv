import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PortFolio from './pages/portfolio'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PortFolio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
