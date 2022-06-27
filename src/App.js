import React from 'react';
import Navbar from "./components/Navbar/navbar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () =>{
  return ( 
  <>
    <Navbar />
    <ItemListContainer welcomeMessage = {"Mensaje de bienvenida"}/>
  </>
  );
}



export default App;
