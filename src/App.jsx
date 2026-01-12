import React, { useEffect, useState } from 'react';
import Story from './components/Story/Story';
import Celebrations from './components/Celebrations/Celebrations';
import RSVP from './components/RSVP/RSVP';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/Common/ScrollToTop';
import Preloader from './components/Common/Preloader';
import Lenis from 'lenis';

import './App.css';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Check if fonts are loaded or just use a timer for the experience
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShowPreloader(false);
      }, 800); // Wait for transition to complete
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optionally unobserve after animating in
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
      observer.observe(el);
      // Immediate check for elements already in view
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('active');
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      {showPreloader && <Preloader fadeOut={fadeOut} />}
      <Hero />
      <Story />
      <Celebrations />
      <RSVP />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App