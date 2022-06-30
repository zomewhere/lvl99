import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList"
import { getData } from "../../mocks/fakeApi"
import "./ItemListContainer.css"

let ItemListContainer = ({welcomeMessage}) => {
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)

    
    // useEffect(()=>{
    //     getData
    //     .then((result)=> setProductList(result))
    //     .cath((error)=> console.log(error))
    //     .finally(()=> setLoading(false))
    // },[])

    const getProducts = async () => {
        try{
          const respuesta = await getData
          setProductList(respuesta)
        }catch(error){
          console.log(error)
        }finally{
          setLoading(false)
        }
      }
  
      useEffect(()=>{
        getProducts()
      },[])

    return(
        <div>
            <h2>{welcomeMessage}</h2>
            {loading ? <p className="loading">Cargando...</p> : <ItemList productList={productList} />}
        </div>
    )
    
}

export default ItemListContainer