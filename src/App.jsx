import './App.css'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import { Carousel } from './components/Carousel'

function App() {

  return (
    <div className='max-h-screen flex flex-col'>
      <Navbar />
      <SideBar />
      <Carousel />
    </div>
  )
}

export default App
