import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList"
import { getData } from "../../mocks/fakeApi"

let ItemListContainer = ({welcomeMessage}) => {
    // const [productList, setProductList] = useState([])
    // const [loading, setLoading] = useState(true)

    
    // useEffect(()=>{
    //     getData
    //     .then((result)=> setProductList(result))
    //     .cath((error)=> console.log(error))
    //     .finally(()=> setLoading(false))
    // },[])

    return(
        <div>
            <h2>{welcomeMessage}</h2>
            {/* {loading ? <p>Cargando...</p> : <ItemList productList={productList} />} */}
        </div>
    )
    
}

export default ItemListContainer