import { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import BooksOnSaleCard from "./BooksOnSaleCard";

const BooksOnSale = () => {
  const [demoData, setDemoData] = useState([]);
  console.log("demoData", demoData);

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
    <div className="my-16">
      <div>
        <div className="py-10 bg-[#F1F1F1] mr-[12%]"></div>
        <div className="bg-[#609ea2a1] py-6 mt-[-2%] ml-[12%] ">
          <h1 className="sale-heading px-16">Books are on SALE % </h1>
        </div>
      </div>
      <div className="lg:w-[80%] lg:mx-auto py-4  mb-16 px-4">
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  gap-5 mt-16 mb-10">
          {demoData?.map((book, i) => (
            <BooksOnSaleCard book={book} key={i}></BooksOnSaleCard>
          ))}
        </div>
        <Link
          href={"/books"}
          className="flex items-center gap-2 text-primary hover:text-secondary mx-4"
        >
          More Books <AiOutlineArrowRight />{" "}
        </Link>
      </div>
    </div>
  );
};

export default BooksOnSale;
