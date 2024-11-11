import './App.css'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import { Carousel } from './components/Carousel'
import Discover from './components/Discover'
import ScrollBtn from './components/ScrollBtn'
import AboutMe from './components/AboutMe'
import Music from "./components/Music.jsx";

function App() {

  return (
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
          <section className="snap-start h-screen w-full relative">
              <div className="relative h-screen bg-cover bg-[url('./assets/Gradient.svg')]">
                  <Navbar/>
                  <SideBar/>
                  <Carousel/>
                  <Discover/>
                  <ScrollBtn/>
              </div>
          </section>

          <section className="snap-start h-screen w-full bg-cover bg-[url('./assets/Gradient.svg')]">
              <div className="h-full w-full">
                  <AboutMe title='About Jack Pantomime'/>
              </div>
          </section>

          <section id='jacks-music' className='snap-start h-screen w-full'>
              <div>
                  <AboutMe title='Listen to Jacks music now'/>
              </div>
          </section>

          <section id='merch' className='snap-start h-screen w-full'>
              <div>
                  <AboutMe title='shop for merch'/>
              </div>
          </section>

          <section id='tour' className='snap-start h-screen w-full'>
              <div>
                  <AboutMe title='check out the tour'/>
              </div>
          </section>

      </div>
  )
}

export default App
