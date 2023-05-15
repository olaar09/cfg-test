import React, {useState} from "react";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import beauteProducts from "./beaute_products shot.jpg";
import beauteEyes from "./eyes1.jpg";
import beauteEyeliner from "./eyes2.jpg";
import beauteFoundation from "./foundation1.jpg";
import beautePowder from "./foundation2.jpg";
import beauteLipstick from "./lipstick1.jpg";
import beauteGloss from "./lipstick2.jpg";

import "./Products.css";

const SearchBarSection = () => {
    const [products, setProducts] = useState([
    {
      id: "p1",
      image: beauteLipstick,
      title: "MATTE LIPSTICK",
      description: "A creamy rich formula with high colour payoff, in a no-shine matte finish.",
      price: 20,
    },
    {
      id: "p2",
      image: beauteGloss,
      title: "GLOSS LIPSTICK",
      description: "A creamy rich formula with high colour payoff, in a shine finish.",
      price: 22,
    },
    {
      id: "p3",
      image: beauteEyes,
      title: "EYE SHADOW",
      description: "A shadow formulated to prolong the look of your eye makeup.",
      price: 18,
    },
    {
      id: "p4",
      image: beauteEyeliner,
      title: "EYELINER",
      description: "A shadow formulated to prolong the look of your eye makeup.",
      price: 18,
    },
    {
      id: "p5",
      image: beauteFoundation,
      title: "MINERAL FOUNDATION",
      description: "Light to medium beige with peachy undertone for light to medium skin.",
      price: 32,
    },
    {
      id: "p6",
      image: beautePowder,
      title: "POWDER FOUNDATION",
      description: "Light to medium beige with peachy undertone for light to medium skin.",
      price: 28,
    },

  ]);

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
  
    if (
      search.length > 0 && product.title.toLowerCase().includes(search) ||
      search.length > 0 && product.description.toLowerCase().includes(search)
    ) {
      return product;
  
    }
   
  });
 
      return (
    <div className="searchBarSection">
      <div class="searchBar">
        <input
          className="input"
          placeholder="Search Products"
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
        <button className="button">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            color= "black"
            width="20px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="display">
        {filteredProducts.map((product) => (
        <div className="productcard">
      <ProductDetails
        image={product.image}
        title={product.title}
        description={product.description}
        price={product.price}
        ></ProductDetails>
        </div>

    
        )
      
        )}
        </div>
      </div>
  );

  };

export default SearchBarSection;
