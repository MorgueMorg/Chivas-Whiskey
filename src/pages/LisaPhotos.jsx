import React from "react";
import Carousel from "react-grid-carousel";

const LisaPhotos = () => {
  return (
    <div className="carousel">
      <Carousel
        cols={2}
        rows={1}
        gap={10}
        hideArrow={false}
        autoplay={3000}
        loop
      >
        <Carousel.Item>
          <img
            width="100%"
            src="https://chivas.idlcloud.com/stage/basic_uploads/sir-trevor/622a3e282cb35.jpeg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src="https://chivas.idlcloud.com/stage/basic_uploads/sir-trevor/622a3e31ce541.jpeg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src="https://chivas.idlcloud.com/stage/basic_uploads/sir-trevor/622a3eac25c93.jpeg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src="https://chivas.idlcloud.com/stage/basic_uploads/sir-trevor/622a3ec03d991.jpeg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src="https://chivas.idlcloud.com/stage/basic_uploads/sir-trevor/622a3ed78b7c1.jpeg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src="https://chivas.idlcloud.com/stage/basic_uploads/sir-trevor/622a3ee3f04bd.jpeg"
          />
        </Carousel.Item>
        {/* ... */}
      </Carousel>
    </div>
  );
};

export default LisaPhotos;
