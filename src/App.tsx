import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
 

  return (
    <>
    <h1>My Portfolio</h1>

    <Navbar />

    <Home />
    <About />
    <Projects />
    <Contact />
    </>
  )
}

export default App
