import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About/About'
import Footer from './components/Footer/Footer'
import Rooms from './pages/Rooms/Rooms'


function App() {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const handleScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document
      .querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale")
      .forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/rooms' element={<Rooms />} />

      </Routes>
      <Footer />

    </>
  )
}

export default App
