import React from "react";
import ProductDetails from "./ProductDetails";
import beauteProducts from "./beaute_products shot.jpg";
import beauteEyes from "./eyes1.jpg";
import beauteEyeliner from "./eyes2.jpg";
import beauteFoundation from "./foundation1.jpg";
import beautePowder from "./foundation2.jpg";
import beauteLipstick from "./lipstick1.jpg";
import beauteGloss from "./lipstick2.jpg";
import SearchBarSection from "./searchbar";

import "./Products.css";

function Products() {
  const products = [
    {
      id: "p1",
      image: beauteLipstick,
      title: "MATTE LIPSTICK",
      description:
        "A creamy rich formula with high colour payoff, in a no-shine matte finish.",
      price: 20,
    },
    {
      id: "p2",
      image: beauteGloss,
      title: "GLOSS LIPSTICK",
      description:
        "A creamy rich formula with high colour payoff, in a shine finish.",
      price: 22,
    },
    {
      id: "p3",
      image: beauteEyes,
      title: "EYE SHADOW",
      description:
        "A shadow formulated to prolong the look of your eye makeup.",
      price: 18,
    },
    {
      id: "p4",
      image: beauteEyeliner,
      title: "EYE SHADOW",
      description:
        "A shadow formulated to prolong the look of your eye makeup.",
      price: 18,
    },
    {
      id: "p5",
      image: beauteFoundation,
      title: "MINERAL FOUNDATION",
      description:
        "Light to medium beige with peachy undertone for light to medium skin.",
      price: 32,
    },
    {
      id: "p6",
      image: beautePowder,
      title: "LIQUID FOUNDATION",
      description:
        "Light to medium beige with peachy undertone for light to medium skin.",
      price: 28,
    },
  ];
  return (
    <>
      <div className="top">
        <h1 className="productsTitle">PRODUCTS</h1>
        <img
          src={beauteProducts}
          className="beauteProducts"
          alt="beauteProducts"
        />
      </div>
      <div className="products">
      <div>
      <SearchBarSection />
    </div>
      <div className="categories">
        <div onClick={() => window.location.replace("/products#lips")}>
<button class="button">LIPS</button>
</div>
<div onClick={() => window.location.replace("/products#eyes")}>
<button class="button">EYES</button>
</div>
<div onClick={() => window.location.replace("/products#face")}>
<button class="button">FACE</button>
</div>
        </div>
        <div className="products-list">
        <h1 id="lips">LIPS</h1>
          <div className="lips">
            <ProductDetails
              image={products[0].image}
              title={products[0].title}
              description={products[0].description}
              price={products[0].price}
            ></ProductDetails>
            <span class="spacer"></span>
            <ProductDetails
              image={products[1].image}
              title={products[1].title}
              description={products[1].description}
              price={products[1].price}
            ></ProductDetails>
          </div>
          <h1 id="eyes">EYES</h1>
          <div className="eyes">
            <ProductDetails
              image={products[2].image}
              title={products[2].title}
              description={products[2].description}
              price={products[2].price}
            ></ProductDetails>
            <span class="spacer"></span>
            <ProductDetails
              image={products[3].image}
              title={products[3].title}
              description={products[3].description}
              price={products[3].price}
            ></ProductDetails>
          </div>
          <h1 id="face">FACE</h1>
          <div className="face">
            <ProductDetails
              image={products[4].image}
              title={products[4].title}
              description={products[4].description}
              price={products[4].price}
            ></ProductDetails>
            <span class="spacer"></span>
            <ProductDetails
              image={products[5].image}
              title={products[5].title}
              description={products[5].description}
              price={products[5].price}
            ></ProductDetails>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
