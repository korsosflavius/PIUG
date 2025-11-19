import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Search from './components/Search'
import ImageCarousel from './components/ImageCarousel'
import Attractions from './components/Attractions'
import Restaurants from './components/Restaurants'
import InfoTable from './components/InfoTable'
import VideoSection from './components/VideoSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import HelpButton from './components/HelpButton'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="app">
      <Header onThemeToggle={toggleTheme} isDarkMode={isDarkMode} />
      <Hero />
      <Search />
      <ImageCarousel />
      <Attractions />
      <Restaurants />
      <InfoTable />
      <VideoSection />
      <ContactForm />
      <Footer />
      <HelpButton />
      <ScrollToTop />
    </div>
  )
}

export default App
