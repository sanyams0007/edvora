// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import Product from "./Product";

import "swiper/swiper-bundle.min.css";

// import Swiper core and required modules
import SwiperCore, { Navigation, Mousewheel, Keyboard } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Mousewheel, Keyboard]);

export default function Carousel({ select, products }) {
  return (
    <>
      <Swiper
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        slidesPerView={3}
        navigation={true}
        className="mySwiper"
      >
        {products.map((product, idx) => (
          <SwiperSlide key={idx}>
            <Product product={product} />
          </SwiperSlide>
        ))}
        {/* .filter(
            ({ product_name, address: { state, city } }) =>
              product_name.includes(select.Name) ||
              state.includes(select.State) ||
              city.includes(select.City)
          )
              ) */}
      </Swiper>
    </>
  );
}
