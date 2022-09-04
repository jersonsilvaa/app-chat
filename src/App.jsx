import React from 'react'
import Register from './pages/FormRegister/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/registro' element={ <Register /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
