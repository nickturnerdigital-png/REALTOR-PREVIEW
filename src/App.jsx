import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

import { useLenis } from './hooks/useLenis'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Cursor from './components/ui/Cursor'
import ScrollProgress from './components/ui/ScrollProgress'
import PageCurtain from './components/ui/PageCurtain'
import Preloader from './components/ui/Preloader'

import Home from './pages/Home'
import Listings from './pages/Listings'
import ListingDetail from './pages/ListingDetail'
import About from './pages/About'
import Communities from './pages/Communities'
import Sell from './pages/Sell'
import Contact from './pages/Contact'

gsap.registerPlugin(ScrollTrigger, SplitText)

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppInner() {
  useLenis()

  return (
    <>
      <Cursor />
      <ScrollProgress />
      <PageCurtain />
      <Preloader />
      <Header />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/listings/:slug" element={<ListingDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  )
}
