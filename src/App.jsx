import React from 'react';
import Navbar from "./components/Navbar/navbar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


const App = () =>{

  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos`);
  };

  return ( 
  <>
    <Navbar />
    <ItemListContainer welcomeMessage = {"Mensaje de bienvenida"}/>
    <ItemCount onAdd={onAdd}/>
  </>
  );
}



export default App;
