import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import LastestWork from './components/LastestWork'
import Navbar from './components/Navbar'
import Solution from './components/Solution'
import SponsorLogo from './components/SponsorLogo'
import Testimonial from './components/Testimonial'

function App() {

  return (
    <div className='mx-20'>
      <Navbar />
      <Banner />
      <SponsorLogo />
      <Solution />
      <LastestWork />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
