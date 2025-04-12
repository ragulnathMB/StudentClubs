import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import styles from './App.module.css'
import menu from './assets/menu.png'
import Home from './Components/Home/Home'
import ClubDetails from './Components/ClubPage/ClubPage' // create this component
import About from './Components/About/About'

function App() {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <Router>
      <div className={styles.main}>
        <div className={styles.menuContainer} onClick={toggleMenu}>
          <img src={menu} className={styles.menuimg} />
        </div>

        {showMenu && (
          <div className={styles.menuModal}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Clubs</Link></li> {/* Example link */}
              <li><Link to="/about">About</Link></li> {/* Optional future route */}
            </ul>
          </div>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/club/:title" element={<ClubDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
