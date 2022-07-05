import React from 'react';
import Navbar from "./components/Navbar"
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


const App = () =>{

  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos`);
    console.log(`Agregaste ${qty} productos`);
  };

  return ( 
  <>
      <Navbar />
      <ItemListContainer welcomeMessage = {"Mensaje de bienvenida"}/>
      <ItemCount stock = {5} initial = {1} onAdd={onAdd}/>
      <ItemDetailContainer />    
  </>
  );
}


export default App;
