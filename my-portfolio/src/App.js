import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <Contacts />
      <Footer />
      </>
  )
}

export default App;
