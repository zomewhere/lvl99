import React from 'react';
import { onAdd } from '../hooks/useCounter';
import ItemCount from './ItemCount';
import "./styles/ItemDetail.css"

const ItemDetail = ({ product }) => {
    return (
        <div className="itemDetail">
            <img src={product.img} alt={product.name} width="400" />
            <div className='itemDetail-Card'>
                <h1>{product.name}</h1>
                <h2>$ {product.price}</h2>
                <h3>{product.description}</h3>
                <p>Stock: {product.stock}</p>
                <div className='itemDetail-Count'>
                    <ItemCount stock = {10} initial = {9} onAdd = {onAdd}/>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;