import React from 'react'
import NavBar from './Components/Navbar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {action,originals } from './urls'


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url={originals}  title='Netfilx Orginals' />
    <RowPost url={action}  title='Action' isSmall/> 
    {/* if isSmall present it means true we dont have to write isSmall=true */}
    </div>
  );
}

export default App;
