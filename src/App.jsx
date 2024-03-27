import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ContactPage from './comps/ContactPage'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<ContactPage />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

