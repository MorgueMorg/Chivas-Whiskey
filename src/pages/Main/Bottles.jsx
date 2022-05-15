import React from "react";
import Carousel from "react-grid-carousel";

const Bottles = () => {
  return (
    <div className="bottles">
      <Carousel
        cols={3}
        rows={1}
        gap={10}
        hideArrow={false}
        autoplay={2000}
        loop
        // mobileBreakpoint={320}
        responsiveLayout={[
          {
            breakpoint: 320,
            cols: 1,
            rows: 1,
            gap: 3,
            loop: true,
            autoplay: 1000,
          },
        ]}
      >
        <Carousel.Item>
          <img
            width="60%"
            src="https://chivas.idlcloud.com/stage/DrinkToMarket/10771/snapshot/3/snapshot_430x550.jpeg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="60%"
            src="https://chivas.idlcloud.com/stage/DrinkToMarket/10809/snapshot/1/snapshot_430x550.jpeg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="60%"
            src="https://chivas.idlcloud.com/stage/DrinkToMarket/2420/snapshot/4/snapshot_430x550.jpeg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="60%"
            src="https://chivas.idlcloud.com/stage/DrinkToMarket/10769/snapshot/3/snapshot_430x550.jpeg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="60%"
            src="https://chivas.idlcloud.com/stage/DrinkToMarket/10786/snapshot/3/snapshot_430x550.jpeg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="60%"
            src="https://chivas.idlcloud.com/stage/DrinkToMarket/2421/snapshot/4/snapshot_430x550.jpeg"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Bottles;
