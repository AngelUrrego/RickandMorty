import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './styles/App.css'
import './styles/navbar.css'
import Home from './pages/Home'
import Characters from './pages/Characters'
import Episodes from './pages/Episodes'
import serie from './assets/serie.png'
import NotFound from './pages/NotFound'
import Location from './pages/Location'
import { useState } from 'react'

function App() {
  const [MenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!MenuOpen);
  }

  return (
    <Router>
      <div className='nav'>
        <img src={serie} alt="Serie Logo" />
        <div className={`links ${MenuOpen ? 'open' : ''}`}>
          <Link className="link" to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
          <Link className="link" to='/characters' onClick={() => setMenuOpen(false)}>Personajes</Link>
          <Link className="linkE" to='/episodes' onClick={() => setMenuOpen(false)}>Episodios</Link>
          <Link className="linkE" to='/location' onClick={() => setMenuOpen(false)}>Locaciones</Link>
        </div>
        <button className='hamburger' onClick={toggleMenu}>
          &#9776;
        </button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/location" element={<Location />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
