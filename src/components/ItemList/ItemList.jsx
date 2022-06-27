import React from "react";

const ItemList = ({productList}) => {
    return(
        <div>
            <h3>Lista de productos</h3>
            {productList.map((products)=>
            <p key={products.id}>{products.name}</p>)
            }
        </div>
    )
}

export default ItemList