const Hero = () => {
    return (
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET
          DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
          </p>
          <div className="hero-btn">
            <button>ShopNOW</button>
            <button className="secondary-btn">Category</button>
          </div>
          <div className="shopping">
            <div className="brand-icons">
                <img src="/images/shop.png"alt="logo"></img>
            </div>
          </div>

        </div>
        <div className="hero-image">
           <img src="/images/shoe_image.png"alt="logo"/>   
        </div>
      </main>
    );
  };
  
  export default Hero;
  