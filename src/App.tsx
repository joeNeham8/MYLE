import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Feature from './components/features';
import Footer from './components/footer';






const App: React.FC = () => {
  return( 

    <div>
    <Navbar /> 
    <Hero/>
    <Feature/>
    <Footer />  
    </div>
  );
};

export default App;

