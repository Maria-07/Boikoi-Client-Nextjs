import Image from "next/image";
import book from "../../../../assets/img/BookShopInfo.png";
import Link from "next/link";
import { AiFillShop } from "react-icons/ai";
import { BsBookHalf } from "react-icons/bs";
import { FaSearchLocation } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

const BoikoiInfo = () => {
  return (
    <div className="  py-4  px-4 my-24">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
        <div className="p-5">
          <Image
            src={book}
            width={"auto"}
            height={"auto"}
            alt="Picture of the author"
            className=" "
          />
          <div className="absolute mt-[-50%] lg:mt-[-20%] mx-[50px]">
            <h1 className="text-white font-semibold text-3xl sm:w-[350px] ">
              Find Your Nearby Book Shops and Customers
            </h1>
            <div className="flex items-center gap-4 my-5">
              <Link href={"/shops"}>
                <button className="px-4 py-2 bg-white text-primary font-semibold rounded-md text-base hover:text-secondary">
                  Shops
                </button>
              </Link>
              <Link href={"/books"}>
                <button className="px-4 py-2 bg-white text-primary font-semibold rounded-md text-base hover:text-secondary">
                  books
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10">
            <div>
              <AiFillShop className="text-4xl text-primary" />
              <h1 className="text-[20px] text-dark font-semibold my-2">
                Bookshops
              </h1>
              <p className="  text-accent mb-2">
                NILKHET supports local bookshops, promoting a thriving reading
                culture and ensuring a diverse selection of books is easily
                accessible to users.
              </p>
            </div>
            <div>
              <BsBookHalf className="text-4xl text-primary" />
              <h1 className="text-[20px] text-dark font-semibold my-2">
                Providing Books
              </h1>
              <p className="  text-accent mb-2">
                It helps book lovers by providing a convenient and centralized
                platform to discover and access a wide range of books from local
                bookshops.
              </p>
            </div>
            <div>
              <IoIosPeople className="text-4xl text-primary" />
              <h1 className="text-[20px] text-dark font-semibold my-2">
                Community Engagement
              </h1>
              <p className="  text-accent mb-2">
                Users can access a wide range of books from various local
                bookshops in one place, saving time and effort in searching for
                specific titles or genres.users directly support local
                bookshops, contributing to the sustainability and growth of
                these businesses within their communities.
              </p>
            </div>
            <div>
              <FaSearchLocation className="text-4xl text-primary" />
              <h1 className="text-[20px] text-dark font-semibold my-2">
                Search nearby
              </h1>
              <p className="  text-accent mb-2">
                It allows users to browse and search for books based on their
                preferences, read reviews, and connect with a community of
                fellow book enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoikoiInfo;
