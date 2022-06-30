import React from "react";
import Item from "../Item/Item"
import "./ItemList.css"


const ItemList = ({productList}) => {
    return(
        <div>
            <h3>Lista de productos</h3>
            <div className="itemList">
            {productList.map((product)=><Item key={product.id} product={product}/>)}
            </div>
        </div>
    )
}

export default ItemList