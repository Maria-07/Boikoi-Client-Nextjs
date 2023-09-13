import { useEffect, useState } from "react";
import AvailableBookCard from "./AvailableBookCard";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useGetAllBooksQuery } from "@/redux/features/book/bookApi";

const AvailableBooks = () => {
  //! get all books
  const {
    data: books,
    isLoading,
    isError,
  } = useGetAllBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 100,
  });

  useEffect(() => {
    if (!isLoading && !isError) {
      console.log("All books:", books?.data);
    }
  }, [books, isLoading, isError]);

  return (
    <div className=" xl:mx-auto py-4 sm:mt-[10%] mt-16 mb-16 px-4">
      <h1 className="heading text-center">Available Books</h1>
      <p className="text-xl font-secondary text-accent text-center lg:px-[200px] my-5">
        Welcome to BookLink&apos;s expansive book categories section. Here, you
        can embark on a journey through an extensive collection of captivating
        genres that cater to every reading preference. From gripping mysteries
        to heartwarming romances, thought-provoking non-fiction to fantastical
        adventures, we have curated an array of book categories to ignite your
        passion for reading.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5  gap-5 mt-16 mb-10">
        {books?.data?.slice(0, 5).map((book, i) => (
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
