import './App.css';
import Navbar from './components/First Section/Navbar.jsx';
import SideBar from './components/First Section/SideBar.jsx';
import { Carousel } from './components/First Section/Carousel.jsx';
import Discover from './components/First Section/Discover.jsx';
import ScrollBtn from './components/ScrollBtn';
import AboutMe from './components/Second Section/AboutMe.jsx';
import Music from "./components/Third Section/Music.jsx";
import Tours from "./components/Fourth Section/Tours.jsx";


function App() {

  return (
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
          <section className="snap-start h-screen w-full relative">
              <div className="relative h-screen bg-cover bg-[url('./assets/Gradient.svg')]">
                  <Navbar />
                  <SideBar />
                  <Carousel />
                  <Discover />
                  <ScrollBtn />
              </div>
          </section>

          <section className="snap-start h-screen w-full bg-cover bg-[url('./assets/Gradient.svg')]">
              <div className="h-full w-full">
                  <AboutMe title='About Jack Pantomime'/>
              </div>
          </section>

          <section id='jacks-music' className="snap-start h-screen w-full bg-cover bg-[url('./assets/Gradient.svg')]">
              <div title='Listen to Jacks music now'>
                  <Music />
              </div>
          </section>

          <section id='tour' className="snap-start h-screen w-full bg-cover bg-[url('./assets/Gradient.svg')]">
              <div title='check out the tour'>
                  <Tours />
              </div>
          </section>

      </div>
  )
}

export default App
