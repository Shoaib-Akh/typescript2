// import {  } from 'react'
import { Routes,Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import "bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home'
import Store from './pages/Store'
import About from './pages/About'
import Navbar from "./commponets/Navbar"
function App() {


  return (
  <>
  <Navbar/>
  <Container className='mb-4'>
  <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/store' element={<Store/>}></Route>
<Route path='/about' element={<About/>}></Route>

  </Routes>
    </Container>
  </>
  )
}

export default App
