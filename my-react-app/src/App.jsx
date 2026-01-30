import React from 'react';
import Button from './Components/Button';
import Card from './Components/Card';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Greet from './Components/Greet';

function App(){
  return(
    <>
    <Header />
    <Navbar />
    <Profile />
    <h2>{Greet("Darren Bent")}</h2>
    <Card />
    <Button />
    <Footer />
    </>
  )
}

export default App;