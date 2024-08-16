import React from 'react';
import './App.css';
import Header from './Header/Header';
import About from './About/About';
import Clients from './Clients/Clients';
import Features from './Features/Features';
import Services from './Services/Services';
import Cta from './Cta/Cta';
import Portfolios from './Portfolios/Portfolios';
import Counts from './Counts/Counts';
import Members from './Members/Members';
import Teams from './Teams/Teams';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
// import GoTop from './GoTop/GoTop';

export default function App() {
  return (
    <div className='container'>
      <Header />

      <About />
      <Clients />
      <Features />
      <div className="serv">
        <Services />
      </div>
      <Cta />
      <Portfolios />
      <Counts />
      <Members />
      <Teams />
      <Contact />
      <Footer />

      {/* <GoTop /> */}
      
    </div>
  )
}