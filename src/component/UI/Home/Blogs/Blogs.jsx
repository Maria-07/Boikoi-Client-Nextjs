import { Swiper, SwiperSlide } from "swiper/react";
import Blog from "./Blog";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useGetBlogsQuery } from "@/redux/features/blog/blogApi";
import { useEffect } from "react";

const Blogs = () => {
  //! get all blogs
  const {
    data: blogs,
    isLoading,
    isError,
  } = useGetBlogsQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 100,
  });

  useEffect(() => {
    if (!isLoading && !isError) {
      console.log("All Blogs:", blogs?.data);
    }
  }, [blogs, isLoading, isError]);

  return (
    <div className="  py-4 my-24 px-4">
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
            {blogs?.data?.map((blog, i) => (
              <SwiperSlide key={i}>
                <Blog blog={blog}></Blog>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Blogs;
