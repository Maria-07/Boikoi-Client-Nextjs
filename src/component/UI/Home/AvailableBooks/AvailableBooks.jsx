import { useEffect, useState } from "react";
import AvailableBookCard from "./AvailableBookCard";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const AvailableBooks = () => {
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
    <div className="lg:w-[80%] lg:mx-auto py-4 sm:my-[10%] my-16 px-4">
      <h1 className="heading text-center">Available Books</h1>
      <p className="text-xl font-secondary text-accent text-center lg:px-[200px] my-5">
        Welcome to BookLink&apos;s expansive book categories section. Here, you
        can embark on a journey through an extensive collection of captivating
        genres that cater to every reading preference. From gripping mysteries
        to heartwarming romances, thought-provoking non-fiction to fantastical
        adventures, we have curated an array of book categories to ignite your
        passion for reading.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  gap-5 mt-16 mb-10">
        {demoData?.map((book, i) => (
          <AvailableBookCard book={book} key={i}></AvailableBookCard>
        ))}
      </div>
      <Link
        href={"/books"}
        className="flex items-center gap-2 text-primary hover:text-secondary mx-4"
      >
        Find Books by advanced search <AiOutlineArrowRight />{" "}
      </Link>
    </div>
  );
};

export default AvailableBooks;
