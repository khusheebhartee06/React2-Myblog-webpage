// import something from 'somewhere'
import React from "react";
import Topheader from "./components/Topheader/Topheader.jsx";
import Header from "./components/Header/Header.jsx";
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Main from './components/Main/Main.jsx'

// Function Define Area
function App() {
  return (
    <>
      <Topheader />
      <Header/>
      <Navbar />
      <Main/>
      <Footer/>
    </>
  );
}

// Exporting Area
export default App;
