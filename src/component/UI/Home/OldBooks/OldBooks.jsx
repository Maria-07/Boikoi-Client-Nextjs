import { useEffect, useState } from "react";
import OldBookCard from "./OldBookCard";
import WishList from "../WishList/WishList";

const OldBooks = () => {
  const [demoData, setDemoData] = useState([]);
  // console.log("demoData", demoData);

  useEffect(() => {
    async function fetchDemoData() {
      try {
        const response = await fetch("DemoData/book.json"); // Fetch data from public folder
        const data = await response.json();
        setDemoData(data);
      } catch (error) {
        console.error("Error fetching demo data:", error);
      }
    }

    fetchDemoData();
  }, []);

  return (
    <div className="lg:w-[80%] lg:mx-auto py-4  px-4">
      <h1 className="heading text-center">
        A Easy Way To Buy & Sell Your Books
      </h1>
      <p className="text-xl font-secondary text-accent text-center lg:px-[200px] my-5">
        Welcome to our platform, where buying and selling books has never been
        easier.With our user-friendly interface, secure transactions, and a
        community of book lovers at your fingertips, we strive to make the
        buying and selling experience as smooth as turning a page. Join us today
        and embark on a journey where books find their rightful places and
        stories continue to be cherished.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  gap-5 my-24">
        <div className="pr-2">
          <h1 className="text-[20px] text-dark font-semibold my-2">
            For Buyers,
          </h1>
          <p className="text-sm  text-accent  my-5">
            With a few simple clicks, you can have your desired book delivered
            right to your doorstep, making the purchasing process effortless and
            convenient. Browse through our curated selection, explore
            recommendations, and find the perfect addition to your personal
            library.
          </p>
          <h1 className="text-[20px] text-dark font-semibold mt-10 mb-2">
            For Seller,
          </h1>
          <p className="text-sm  text-accent  my-5">
            we provide a hassle-free avenue to find new homes for your books.
            Easily list your books for sale, set your preferred price, and
            connect with potential buyers who are eager to embrace the stories
            within those pages. Our platform offers a supportive marketplace for
            your books to find new readers.
          </p>
        </div>
        <div className="sm:col-span-3 border-x-2 px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 ">
            {demoData?.map((book, i) => (
              <OldBookCard book={book} key={i}></OldBookCard>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-[20px] text-dark font-semibold  mb-2">
            Wish Lists
          </h1>
          <p className="text-sm  text-accent  my-5">
            Where users can express their book requests.
          </p>
          <div>
            <WishList></WishList>
            <WishList></WishList>
            <WishList></WishList>
            <WishList></WishList>
            <WishList></WishList>
            <WishList></WishList>
            <WishList></WishList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldBooks;
