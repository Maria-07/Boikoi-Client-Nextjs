import { Card } from "antd";
import Image from "next/image";
import bookPic from "../../../../assets/img/book.jpg";
import { BsBookmark } from "react-icons/bs";
import { RiListSettingsLine } from "react-icons/ri";
import { BiDetail } from "react-icons/bi";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";

const OldBookCard = ({ book }) => {
  const { title, price, publisher_name } = book;
  return (
    <div className="mx-auto">
      <div className="option">
        <Card hoverable style={{ width: 230, height: 380 }}>
          <div className="relative w-full h-[208px]">
            <Image
              src={bookPic}
              width={"auto"}
              height={"auto"}
              alt="Picture of the author"
              className="h-[206px] "
            />
            <div className="option-visible absolute top-[20px] left-0 mt-[-20px] mx-auto  w-full h-full">
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 mx-auto w-[65%] h-[35px] ] bg-white  ">
                <div className="flex items-center gap-2 justify-between mt-1 ">
                  <button
                    title="Wish List"
                    className=" text-base text-primary hover:text-secondary font-semibold px-2 "
                  >
                    <AiOutlineHeart />
                  </button>
                  <div className="text-gray-300">|</div>
                  <button
                    title="Edit Book"
                    className=" text-xl text-primary hover:text-secondary font-bold px-2 "
                  >
                    <RiListSettingsLine />
                  </button>
                  <div className="text-gray-300">|</div>
                  <Link href={"/books/oldBooks/123"}>
                    <button
                      title="Book Details"
                      className="mt-1 text-xl text-primary hover:text-secondary font-semibold px-2"
                    >
                      <BiDetail />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="  p-5">
            <h1 className="text-[16px] text-accent font-primary font-medium ">
              {publisher_name}
            </h1>
            <h2 className="text-[20px] font-primary h-[55px] my-1 font-semibold text-dark">
              {title}
            </h2>
            <h3 className="text-[20px] font-primary mb-2 font-medium text-primary">
              ৳ {price}
            </h3>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OldBookCard;
