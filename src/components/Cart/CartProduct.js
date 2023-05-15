import React, { useContext } from 'react'
import { CartContext } from '../Products/CartContext'
import getProductData from '../Products/Products'
import { Button } from 'react-bootstrap'


function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData;

  return (
    <>
        <h3>{productData.title}</h3>
        <img src={productData.image} alt=''/>
        <p>{quantity} total</p>
        <p>£{(quantity * productData.price).toFixed(2)}</p>
        <Button 
            size="sm" 
            variant="dark"
            bg="#f7ede5"
            onClick={() => cart.deleteFromCart(id)}>REMOVE</Button>
        <hr></hr>
    </>
  )
}

export default CartProduct;