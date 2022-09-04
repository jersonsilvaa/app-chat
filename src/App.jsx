import React from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import Chat from './pages/Chat'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/registro' element={ <Register /> } />
          <Route path='/loguearse' element={ <Login /> } />
          <Route path='/chat' element={ <Chat /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
