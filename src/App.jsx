import './App.css'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import { Carousel } from './components/Carousel'
import ScrollBtn from './components/ScrollBtn'
import AboutMe from './components/AboutMe'

function App() {

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <section className="snap-start h-screen w-full relative">
        <div className="relative h-screen bg-custom bg-[radial-gradient(ellipse_80%_80%_at_35%_35%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <Navbar />
          <SideBar />
          <Carousel />
          <ScrollBtn />
        </div>
      </section>

      <section className="snap-start h-screen w-full bg-white">
        <div className="h-full w-full">
          <AboutMe />
        </div>
      </section>
    </div>
  )
}

export default App
