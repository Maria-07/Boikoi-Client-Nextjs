import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import Review from "./Review";

const Reviews = () => {
  return (
    <div className="  py-4 my-36">
      <h1 className="heading text-center">Review</h1>
      <p className="text-xl font-secondary text-accent text-center lg:px-[200px] my-5">
        Unveiling the Voices of Readers: Dive into Engaging Book Reviews
      </p>
      <div className="my-16">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Review></Review>
          </SwiperSlide>
          <SwiperSlide>
            <Review></Review>
          </SwiperSlide>
          <SwiperSlide>
            <Review></Review>
          </SwiperSlide>
          <SwiperSlide>
            <Review></Review>
          </SwiperSlide>
          <SwiperSlide>
            <Review></Review>
          </SwiperSlide>
          <SwiperSlide>
            <Review></Review>
          </SwiperSlide>
          <SwiperSlide>
            <Review></Review>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
