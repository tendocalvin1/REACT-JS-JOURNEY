import React from 'react';
import Button from './Components/Button';
import Card from './Components/Card';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';

function App(){
  return(
    <>
    <Header />
    <Navbar />
    <Profile />
    <Card />
    <Button />
    <Footer />
    </>
  )
}

export default App;