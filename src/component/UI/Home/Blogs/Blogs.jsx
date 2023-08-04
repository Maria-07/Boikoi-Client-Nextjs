import { Swiper, SwiperSlide } from "swiper/react";
import Blog from "./Blog";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Blogs = () => {
  return (
    <div className="lg:w-[80%] lg:mx-auto py-4 my-24 px-4">
      <h1 className="heading text-center">Latest Blog</h1>
      <p className="text-xl font-secondary text-accent text-center lg:px-[200px] my-5">
        Dive into our latest blogs, explore the fascinating world of literature,
        and let the words ignite your imagination. BookLink&apos;s latest blogs
        are your gateway to endless literary discoveries and a source of
        inspiration for your reading journey.
      </p>
      <div className="my-24">
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Blog></Blog>
            </SwiperSlide>
            <SwiperSlide>
              <Blog></Blog>
            </SwiperSlide>
            <SwiperSlide>
              <Blog></Blog>
            </SwiperSlide>
            <SwiperSlide>
              <Blog></Blog>
            </SwiperSlide>
            <SwiperSlide>
              <Blog></Blog>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Blogs;
