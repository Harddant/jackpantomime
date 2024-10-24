import './App.css'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import { Carousel } from './components/Carousel'
import Footer from './components/Footer'

function App() {

  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-custom bg-[radial-gradient(ellipse_80%_80%_at_35%_35%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar />
      <SideBar />
      <Carousel />
      <Footer />
    </div>
  )
}

export default App
