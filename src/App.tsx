import { useEffect } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import LastestWork from './components/LastestWork'
import Navbar from './components/Navbar'
import Solution from './components/Solution'
import SponsorLogo from './components/SponsorLogo'
import Testimonial from './components/Testimonial'
import Cookies from 'js-cookie';

function App() {

  const setLanguageCookie = (language: string) => {
    Cookies.set('language', language);
  }

  const setUserCookie = (user: string) => {
    Cookies.set('user', user)
    Cookies.set('name', 'TestName')
    Cookies.set('active', 'active')
    Cookies.set('expired', '7 days')
  }

  const setCookie = () => {
    setLanguageCookie('th')
    setUserCookie('TestUser')
  }

  useEffect(()=>{
    setCookie()
  }, [])

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
