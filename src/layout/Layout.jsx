import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{height:"8vh"}}></div>
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
