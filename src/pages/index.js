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
import { ToastContainer, toast } from "react-toastify";

const HomePage = () => {
  return (
    <>
      <div className="bg-[rgba(96,158,162,0.77)] pt-8 pb-36 px-3">
        <div className="sm:w-[80%] sm:mx-auto flex flex-wrap items-center justify-between">
          <div className="text-4xl font-bold font-primary text-white">
            Welcome to
            <span className="text-secondary"> Boikoi</span> <br /> Your Gateway
            to Endless Knowledge
          </div>
          <div>
            <Image
              src={banner}
              width={500}
              height={500}
              alt="Picture of the author"
            ></Image>
          </div>
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
    </>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default HomePage;
