import { Card } from "antd";
import bookPic from "../../../../assets/img/book.jpg";
import Image from "next/image";
import Link from "next/link";

const BooksOnSaleCard = ({ book }) => {
  const { title, price, publisher_name } = book;
  return (
    <div className="mx-auto ">
      <Link href={"/books/1213"}>
        <div className="border-[0.2px] border-gray-300 rounded-md ">
          <Card hoverable style={{ width: 240, height: "auto" }}>
            <div className="p-5">
              <Image
                src={bookPic}
                width={"auto"}
                height={"auto"}
                alt="Picture of the author"
                className="h-[206px]"
              />
            </div>
            <div className="absolute top-0 bg-primary text-popover px-2 rounded-sm py-1">
              On Sale
            </div>
            <div className=" border-t-[0.2px] border-gray-300 p-5">
              <h1 className="text-sm text-accent font-primary font-medium ">
                {publisher_name}
              </h1>
              <h2 className="text-base font-primary h-[55px] my-1 font-semibold text-dark">
                {title}
              </h2>
              <div className="flex items-center gap-3">
                <del>
                  <h3 className="text-lg font-primary mb-2 font-medium text-primary">
                    ৳ {price}
                  </h3>
                </del>
                <h3 className="text-lg font-primary mb-2 font-medium text-primary">
                  ৳ {price - 5}
                </h3>
              </div>

              <h1 className="text-base font-primary font-semibold ">
                Duration :
                <span className="text-primary"> 12th March, 2024</span>
              </h1>
            </div>
          </Card>
        </div>
      </Link>
    </div>
  );
};

export default BooksOnSaleCard;
