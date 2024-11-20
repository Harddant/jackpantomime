import './App.css';
import Navbar from './components/First Section/Navbar.jsx';
import SideBar from './components/First Section/SideBar.jsx';
import { Carousel } from './components/First Section/Carousel.jsx';
import Discover from './components/First Section/Discover.jsx';
import ScrollBtn from './components/ScrollBtn';
import AboutMe from './components/Second Section/AboutMe.jsx';
import Music from "./components/Third Section/Music.jsx";
import Tours from "./components/Fourth Section/Tours.jsx";
import React from "react";


function App() {

  return (
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
          <section className="snap-start h-screen w-full relative">
              <div className="relative h-screen bg-cover bg-[url('./assets/Gradient.svg')]">
                  <Navbar />
                  <SideBar />
                  <Carousel />
                  <Discover />
              </div>
              <ScrollBtn index={2} />
          </section>

          <section className="snap-start h-screen w-full bg-cover bg-[url('./assets/Gradient.svg')]">
              <div className="h-full w-full">
                  <AboutMe title='About Jack Pantomime'/>
              </div>
              <ScrollBtn index={3} />
          </section>

          <section id='jacks-music' className="snap-start h-screen w-screen bg-cover bg-[url('./assets/Gradient.svg')]">
              <div className="h-full w-full">
                  <Music />
              </div>
              <ScrollBtn index={4} />
          </section>

          <section id='tour' className="snap-start h-screen w-full bg-cover bg-[url('./assets/Gradient.svg')]">
              <div className="h-full w-full">
                  <Tours />
              </div>
          </section>
      </div>
  )
}

export default App
