import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrendingGames from './components/TrendingGames'
import Recommended from './components/Recommended'
import WhatsNew from './components/WhatsNew/WhatsNew'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <TrendingGames/>
      <Recommended/>
      <WhatsNew/>
      <Footer/>
      
    </>
  )
}

export default App