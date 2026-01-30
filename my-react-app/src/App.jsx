import React from 'react';
import Button from './Components/Button';
import Card from './Components/Card';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Greet from './Components/Greet';
import Name from './Components/Name';
import Age from './Components/Age';
import Style from './Components/Style';
import Multiplication  from './Components/Multiplication';
import Welcome from './Components/Welcome';
import Numerals from './Components/Numerals';
import InlineStyle from './Components/InlineStyle';
import Addition from './Components/Addition';
import MerciBeaucoup from './Components/MerciBeaucoup';

function App(){
  return(
    <>
    <Header />
    <Navbar />
    <Profile />
    <h3>{Welcome("Davinah")}</h3>
    <h3>{MerciBeaucoup("David Gill")}</h3>
    <h3>{Greet("Darren Bent")}</h3>
    <h3>{Name("Daniel Agger", 45)}</h3>
    <h3>{Numerals("Sam Altman", 30)}</h3>
    <h3>{Age(25)}</h3>
    <h3>{Multiplication(10,10)}</h3>
    <h3>{Addition(10,10)}</h3>
    <InlineStyle />
    <Style />
    <Card />
    <Button />
    <Footer />
    </>
  )
}

export default App;