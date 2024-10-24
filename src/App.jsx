import './App.css'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import Grid from './components/Grid'
import Socials from './components/Socials'

function App() {

  return (
    <div className='max-h-screen flex flex-col'>
      <Navbar />
      <SideBar />
      <Grid />
      <Socials />
    </div>
  )
}

export default App
