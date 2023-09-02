import RootLayout from "@/component/Layouts/RootLayout";
import Head from "next/head";
import Image from "next/image";
import banner from "../assets/img/Bookshop-amico.png";
import Count from "@/component/UI/Home/Count/Count";
import AvailableBooks from "@/component/UI/Home/AvailableBooks/AvailableBooks";
import Categories from "@/component/UI/Home/Categories/Categories";
import BoikoiInfo from "@/component/UI/Home/Boikoi/BoikoiInfo";
import OldBooks from "@/component/UI/Home/OldBooks/OldBooks";
import BooksOnSale from "@/component/UI/Home/BooksOnSale/BooksOnSale";
import Facilities from "@/component/UI/Home/Facilities/Facilities";
import Blogs from "@/component/UI/Home/Blogs/Blogs";
import AboutUs from "@/component/UI/AboutUs/AboutUs";
import Reviews from "@/component/UI/Home/Reviews/Reviews";
import { motion } from "framer-motion";
import Tickets from "@/component/UI/Home/Tickets/Tickets";

const HomePage = () => {
  return (
    <>
      <div className="bg-[rgba(96,158,162,0.77)] pt-8 pb-36 px-3">
        <div className="sm:w-[80%] sm:mx-auto flex sm:flex-nowrap flex-wrap gap-3 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl font-bold font-primary text-white"
          >
            Welcome to
            <span className="text-secondary"> Boikoi</span> <br /> Your Gateway
            to Endless Knowledge{" "}
            <div className="text-base lg:w-[55%] my-2 font-normal text-secondary">
              Boikoi is a dynamic online platform that bridges the gap between
              book enthusiasts and local bookshops across Bangladesh. By
              empowering bookshop owners to showcase their inventory, and
              offering users a comprehensive search and shopping experience,
              Boikoi promotes a shared passion for reading, nurtures local
              businesses, and fosters a vibrant community of book lovers
              throughout the nation.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Image
              src={banner}
              width={1300}
              height={500}
              alt="Picture of the author"
            ></Image>
          </motion.div>
        </div>
      </div>
      <Count></Count>
      <AvailableBooks></AvailableBooks>
      <Categories></Categories>
      <BoikoiInfo></BoikoiInfo>
      <OldBooks></OldBooks>
      <BooksOnSale></BooksOnSale>
      <Facilities></Facilities>
      <Blogs></Blogs>
      <AboutUs></AboutUs>
      <Reviews></Reviews>
      <Tickets></Tickets>
    </>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default HomePage;
