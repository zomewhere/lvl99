import React from 'react'
import "./styles/item.css"


const Item = ({product}) => {
  console.log(product)
  const {img, price, name, description}= product

  return (
    <div className='cardBody'>
        <div className='cardImage'>
            <img src={img} alt={name}/>
        </div>
        <div className='cardInfo'>
            <p className='cardName'>{name}</p>
            <p className='cardPrice'>${price}</p>
            <p className='cardDescription'>{description}</p>
        </div>
        <button className='cardButton'>Ver detalle</button>
    </div>
  )
}

export default Item