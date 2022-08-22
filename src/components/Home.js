import React from "react";
import background from "../images/home-bg.jpg";
import "../styles/Home.css";
import Product from "./Product";

// Images
import iphone from "../images/product-iphone13.png";
import samsungs21 from "../images/product-samsungs21.png";
import amazonecho from "../images/product-amazonecho.png";
import ipadpro from "../images/product-ipadpro.png";
import applewatch from "../images/product-applewatch.png";
import samsungtv from "../images/product-samsungtv.png";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src={background} alt="home-background" className="home__image" />

        <div className="home__row">
          <Product
            image={iphone}
            title="Apple iPhone 13, 128GB, Blue - Unlocked (Renewed)"
            price="814.99"
            rating={4.5}
          />
          <Product
            image={samsungs21}
            title="Samsung Galaxy S21 5G, 128GB, Phantom Gray"
            price="599.99"
            rating={4.5}
          />
        </div>

        <div className="home__row">
          <Product
            image={amazonecho}
            title="Echo (4th generation) With Alexa"
            price="1299.99"
            rating={5}
          />
          <Product
            image={ipadpro}
            title="2021 Apple iPad Pro (Wi-Fi, 128GB) - Silver"
            price="599.99"
            rating={5}
          />
          <Product
            image={applewatch}
            title="Apple Watch Series 3 - Silver Aluminum Case"
            price="139.00"
            rating={4.5}
          />
        </div>

        <div className="home__row">
          <Product
            image={samsungtv}
            title="SAMSUNG Odyssey 32-Inch WQHD (2560x1440) Gaming Monitor"
            price="199.99"
            rating={3.5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
