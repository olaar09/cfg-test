import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "./beaute_logo_lb.svg";
import {
  Navbar,
  Container,
  FormControl,
  Badge,
  // Dropdown,
  Button,
} from "react-bootstrap";
// import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import { BsBag } from "react-icons/bs";
// import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
// import DropdownItem from "react-bootstrap/esm/DropdownItem";
import SearchIcon from "./search-icon.svg";
import { Modal } from "react-bootstrap";
import { CartContext } from "../Products/CartContext";
import CartProduct from "../Cart/CartProduct";

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <nav className="header">
        <div className="nav-container">
          <NavLink exact to="/">
            <div>
              <img src={Logo} className="App-logo" alt="logo" />
            </div>
          </NavLink>
          <div></div>

          <NavLink exact to="/" className="nav-logo"></NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/products"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Products
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/cart"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Cart
              </NavLink> */}

            <Navbar>
              <Container>
                <Navbar.Text className="search">
                  <FormControl
                    style={{ width: 200 }}
                    placeholder="Search"
                    className="m-auto"
                  />
                </Navbar.Text>

                <img src={SearchIcon} className="SearchIcon" alt="SearchIcon" />

                <Navbar>
                  <Navbar.Collapse>
                    <Button
                      onClick={handleShow}
                      type="button"
                      class="btn btn-sm me-1"
                      variant="transparent"
                    >
                      <Link to="/cart">
                        {/* <NavLink
                            exact
                            to="/cart"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}> */}
                        <BsBag color="#f7ede5" />
                        <Badge bg="dark">{productsCount}</Badge>
                        {/* </NavLink> */}
                      </Link>
                    </Button>
                  </Navbar.Collapse>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>CART</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {productsCount > 0 ? (
                        <>
                          <p>Items in your cart:</p>
                          {cart.items.map((currentProduct, idx) => (
                            // <h1>{currentProduct.id}</h1>
                            <CartProduct
                              key={idx}
                              id={currentProduct.id}
                              quantity={currentProduct.quantity}
                            ></CartProduct>
                          ))}

                          <h1>Total: {cart.getTotalCost()}</h1>

                          <Button
                            variant="dark"
                            class="btn btn-sm bg-dark m-auto"
                            bg="dark"
                          >
                            <NavLink
                              exact
                              to="/cart"
                              activeClassName="active"
                              className="nav-links"
                              onClick={() => {
                                handleClose(); // Close the modal
                                setClick(false); // Reset the nav menu
                              }}
                            >
                              PAY NOW
                            </NavLink>
                          </Button>
                        </>
                      ) : (
                        <h1>YOUR CART IS EMPTY</h1>
                      )}
                    </Modal.Body>
                  </Modal>

                  {/* <Dropdown align="end">
                    <DropdownToggle variant="transparent">
                      <BsBag color="#f7ede5" fontsize="25px" />
                      <Badge bg="dark">{0}</Badge>
                    </DropdownToggle>

                    <DropdownMenu style={{ minWidth: 120 }}>
                      <span style={{ padding: 10 }}>Cart is empty</span>
                      <DropdownItem>
                        <Button
                          type="button"
                          class="btn btn-sm bg-dark m-auto"
                          bg="dark"
                          variant="dark"
                        >
                          <NavLink
                            exact
                            to="/cart"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                          >
                            Go to cart
                          </NavLink>
                        </Button>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown> */}
                </Navbar>
              </Container>
            </Navbar>
            {/* </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;

/*import React from 'react';
import React, { useContext } from 'react';

function Header({ setPage }) {
  return (
    <header>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 40 }}>
          <li>
          <a href="#" onClick={() => setPage('home')}>Home</a>
          </li>
          <li>
          <a href="#" onClick={() => setPage('products')}>Products</a>
          </li>
          <li>
          <a href="#" onClick={() => setPage('cart')}>Cart</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;*/
