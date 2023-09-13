import { FaShoppingBasket } from "react-icons/fa";
import { MdFindReplace } from "react-icons/md";
import { CgCommunity } from "react-icons/cg";

const Facilities = () => {
  return (
    <div className="  py-4  my-24 px-4">
      <h1 className="heading text-center">Why to choose BoiKoi?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-16 mb-10">
        <div className="">
          <div className="">
            <FaShoppingBasket className="text-secondary text-3xl mx-auto" />
          </div>
          <h1 className="text-lg my-3 font-primary text-primary text-center">
            Convenient Buying and Selling
          </h1>
          <p className="text-center text-sm text-accent">
            {" "}
            BookLink provides a seamless platform for users to buy and sell
            books. Whether you&apos;re looking to purchase a new release or sell
            your pre-loved books, BookLink offers a user-friendly interface and
            secure transactions, making the process quick, easy, and
            hassle-free.{" "}
          </p>
        </div>
        <div className="">
          <div className="">
            <MdFindReplace className="text-secondary text-3xl mx-auto" />
          </div>
          <h1 className="text-lg my-3 font-primary text-primary text-center">
            Discover Nearby Bookshops and Libraries
          </h1>
          <p className="text-center text-sm text-accent">
            With BookLink&apos;s location-based search feature, users can easily
            locate nearby bookshops and libraries. Whether you&apos;re exploring
            a new city or simply looking for a bookstore in your neighborhood,
            BookLink connects you to the literary destinations in your vicinity.
          </p>
        </div>
        <div className="">
          <div className="">
            <CgCommunity className="text-secondary text-3xl mx-auto" />
          </div>
          <h1 className="text-lg my-3 font-primary text-primary text-center">
            Engaging Community and Reviews
          </h1>
          <p className="text-center text-sm text-accent">
            BookLink fosters a vibrant community of book lovers, offering a
            space to connect, share recommendations, and engage in meaningful
            discussions. Users can read and leave reviews, discover new authors,
            and connect with like-minded readers, enhancing their reading
            experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
