import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import Gallery from './components/home/Gallery';
import GetStarted from './components/sections/GetStarted';
import Strategy from './components/sections/Strategy';
import Pricing from './components/sections/Pricing';
import Contact from './components/sections/Contact';
import Solution from './components/sections/Solution';
import ECommerce from './components/sections/ECommerce';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero
          title="A place to display your masterpiece."
          subtitle="Artists can display their masterpieces, and buyers can discover and purchase works that resonate with them."
          ctaText="Join for $9.99/m"
          ctaLink="#pricing"
        />
        <Gallery />
        <GetStarted />
        <Strategy />
        <Pricing />
        <Solution />
        <ECommerce />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;