import React, { useContext, useState } from "react";
import "./ProductDetails.css";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { Button, Col, Form, Row } from "react-bootstrap";

function ProductDetails(props) {
  const cart = useContext(CartContext);
  const { id, image, title, description, price } = props;

  const [productQuantity, setProductQuantity] = useState(0);

  const handleAddToCart = () => {
    cart.addToCart(id);
    setProductQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleRemoveFromCart = () => {
    if (productQuantity > 0) {
      cart.removeFromCart(id);
      setProductQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleDeleteFromCart = () => {
    cart.deleteFromCart(id);
    setProductQuantity(0);
  };

  return (
    <div className="productcard">
      <div>
        <img src={image} alt={title} />
      </div>
      <div className="item__description">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="product__price">£{price}</div>
        <div>
        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="5">
                In Cart: {productQuantity}
              </Form.Label>
              <Col sm="2">
                <Button
                  sm="2"
                  className="btn-sm mt-2"
                  onClick={handleAddToCart}
                >
                  +
                </Button>
                <Button
                  sm="2"
                  className="btn-sm mt-2"
                  onClick={handleRemoveFromCart}
                >
                  -
                </Button>
            <Button
              variant="danger"
              onClick={handleDeleteFromCart}
              className="btn-sm mt-2"
            >
              REMOVE
            </Button>
            </Col>
            </Form>

          </>
        ) : (
          <Button
            type="button"
            class="btn btn-sm m-auto"
            variant="secondary"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </Button>
        )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;


/*import React, { useContext } from "react";
import "./ProductDetails.css";
// import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { Button, Col, Form, Row } from "react-bootstrap";


function ProductDetails(props) {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(props.id);

  return (
    <div className="productcard">
      <div>
        {" "}
        <img src={props.image} alt=" "/>
      </div>
      <div className="item__description">
        <h2>{props.title} </h2>
        <p>{props.description}</p>
        <div className="product__price">£{props.price}</div>
        {/* <Link to="/cart"> *//*}
        { productQuantity > 0 ? 
            <>
              <Form as={Row}>
                <Form.Label column="true" sm="5">Quantity: {productQuantity}</Form.Label>
                <Col sm="2">
                  <Button 
                    variant="dark"
                    sm="2" 
                    className="btn-sm mt-2" 
                    onClick={() => cart.addToCart(props.id)}>+</Button>
                  <Button 
                    variant="dark"
                    sm="2" 
                    className="btn-sm mt-2" 
                    onClick={() => cart.removeFromCart(props.id)}>-</Button>
                </Col>
              </Form>
              <Button 
                variant="dark" 
                onClick={() => cart.deleteFromCart(props.id)} 
                className="mt-5">REMOVE</Button>
            </> 
            :
            <Button 
              type="button" 
              class="btn btn-sm m-auto"
              variant="secondary"
              onClick={() => cart.addToCart(props.id)}>ADD TO CART</Button>
          }
        {/* </Link> *//*}
      </div>
    </div>
  );
}

export default ProductDetails; */
