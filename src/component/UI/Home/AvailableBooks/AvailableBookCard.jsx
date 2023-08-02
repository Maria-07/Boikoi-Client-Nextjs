import { Card } from "antd";
import bookPic from "../../../../assets/img/book.jpg";
import Image from "next/image";
import Link from "next/link";

const AvailableBookCard = ({ book }) => {
  const { title, price, publisher_name } = book;
  return (
    <div className="mx-auto ">
      <Link href={"/books/1213"}>
        <div className="border-[0.2px] border-gray-300 rounded-md ">
          <Card hoverable style={{ width: 240, height: 400 }}>
            <div className="p-5">
              <Image
                src={bookPic}
                width={"auto"}
                height={"auto"}
                alt="Picture of the author"
                className="h-[206px] "
              />
            </div>

            <div className=" border-t-[0.2px] border-gray-300 p-5">
              <h1 className="text-sm text-accent font-primary font-medium ">
                {publisher_name}
              </h1>
              <h2 className="text-base font-primary h-[55px] my-1 font-semibold text-dark">
                {title}
              </h2>
              <h3 className="text-base font-primary mb-2 font-medium text-primary">
                ৳ {price}
              </h3>
            </div>
          </Card>
        </div>
      </Link>
    </div>
  );
};

export default AvailableBookCard;
