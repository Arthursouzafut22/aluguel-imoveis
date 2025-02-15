import { URL_BASE_IMG } from "../../../services/base_Urls";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../node_modules/swiper/modules/pagination.css";
import "../../../../node_modules/swiper/swiper.css";
import { Pagination, Autoplay } from "swiper/modules";
import { PropertProps } from "../../../services/Types";

const Slide = ({ searchProperty }: { searchProperty?: PropertProps }) => {
  return (
    <Swiper
      style={{ height: "374.737px" }}
      modules={[Autoplay, Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={4}
      loop={true}
      mousewheel={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        476: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
    >
      {searchProperty?.imagens &&
        searchProperty.imagens.map((i, index) => (
          <SwiperSlide key={index}>
            <img
              src={`${URL_BASE_IMG}${i}`}
              alt={`Imagem ${index}`}
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                cursor: "pointer",
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slide;
