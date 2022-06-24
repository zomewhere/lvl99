import React from 'react';
import Navbar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';


const App = () =>{
  return ( 
  <>
    <Navbar />
    <ItemListContainer welcomeMessage = {"Mensaje de bienvenida"}/>
  </>
  );
}



export default App;
