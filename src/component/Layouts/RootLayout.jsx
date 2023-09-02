import Head from "next/head";
import Navbar from "../UI/Layouts/Navbar";
import Footer from "../UI/Layouts/Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>BoiKoi</title>
        <meta
          name="description"
          content="This is Book/book-shop management application made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="">
        <div className="sticky top-0 z-50 bg-[#ffffffca] border-b-[1px] shadow-md ">
          <Navbar></Navbar>
        </div>

        <div>{children}</div>
        <Footer></Footer>
      </div>
    </>
  );
};
export default RootLayout;
