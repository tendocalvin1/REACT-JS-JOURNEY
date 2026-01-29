import React from 'react';
import Header from './Components/Header';
import Card from './Components/Card';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Profile from './Components/Profile';
import Button from './Components/Button';


function App(){
  return(
    <div>
      <NavBar />
      <Profile />
      <Header />
      <Card />
      <Button />
      <Footer />
    </div>
  )
}

export default App;