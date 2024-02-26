import React from "react";
import "./Gallery.css";
import { gallery, images } from "../HeroData/Hero";

import Slider from "react-slick";
const Gallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <>
      <div className="gallery">
        <div className="container">
          <div className="SliderRow">
            <div className="SliderCol">
              <div>
                <Slider {...settings}>
                  {gallery.map((item) => {
                    return (
                      <>
                        <div className="child">
                          <div className="CardSlider">
                            <img src={item.img} alt={item.alt} id={item.id} />
                          </div>
                        </div>
                      </>
                    );
                  })}
                </Slider>
              </div>
            </div>
            {/* galley slider  */}
            <div className="SliderCol">
              <div className="GalleryText">
                <h1>1000+ FIgures Collection</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <img src={images[0].img} alt="bitcoin" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
