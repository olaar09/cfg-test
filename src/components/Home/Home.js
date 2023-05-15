import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import "../Products/ProductDetails.css";
import beauteProducts from "./beaute_products shot.jpg";
import skintypeImage from "./skintypes_image.jpg"
import "../Products/ProductDetails.css";
import modelhomepage from "./Model_for_homepage.jpg";
import beauteShadowHome from "./beaute_eyes_02.jpg";
import beauteFoundationHome from "./beaute_foundation_01.jpg";
import beauteLipstickHome from "./beaute_lipstick_01.jpg";


const Home = () => {
  return (
    <div className="home">
   
  
    <div className="home-naturalmakeup-section">

    <img
          src={modelhomepage}
          className="modelhome"
          alt="Model"
        />

        <div class="HomeTextContainer">
        <div class="HomeTitle">NATURAL MAKEUP</div>
        <div class="HomeSubTitle">IN ALL SHADES</div>

        <Link to="/products">
          <button>SHOP NOW</button>
        </Link>
        </div>
    </div>
  




<div class="home-second-container">
<div class="home-second-grid">
<Link to="/products"><img
      src={beauteLipstickHome}
      className="LipsImgHome"
      alt="lips"
      />
    <div class="LipsTitle">LIPS</div>
    </Link>

<Link to="/products"><img
      src={beauteShadowHome}
      className="EyesHomeSec"
      alt="eyes"
    />
     <div class="EyesTitle">EYES</div>
    </Link>


<Link to="/products"><img
      src={beauteFoundationHome}
      className="FaceHomeSec"
      alt="face"
     />
     <div class="FaceTitle">FACE</div></Link>

     </div>
</div>



   
  
    <div className="home-newrange">

        <div class="NewRangeTextContainer">
        <div class="HomeTitle">NEW<br/>RANGE</div>
        <div class="HomeSubTitle">DISCOVER THE PRODUCTS</div>

        <Link to="/products">
          <button>SHOP NOW</button>
        </Link>
        </div>
        
        <img
          src={beauteProducts}
          className="beauteProductsimg"
          alt="Products"
        />
       
       </div>



    
{



    <div>

<div className="skintype-section">

<img
          src={skintypeImage}
          className="skinProducts-img"
          alt="Skin Type"
        />

    <div class="SkinType-TextContainer">
    <div class="skintype-Title">FIND YOUR <br/> SKIN TYPE</div>
    <Link to="/products">
      <button>DISCOVER</button>
    </Link>
    </div>
</div>


    


    </div> }

    
    </div>
  );
}

export default Home;