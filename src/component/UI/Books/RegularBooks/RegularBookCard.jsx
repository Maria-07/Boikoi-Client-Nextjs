import { Card, Image } from "antd";
import Link from "next/link";

const RegularBookCard = ({ book }) => {
  // console.log(book);
  const { title, price, publisher_name, id, image } = book;
  return (
    <div className="mx-auto ">
      <Link href={`/books/bookDetails/${id}`}>
        <div className="border-[0.2px] border-gray-300 rounded-md ">
          <Card hoverable style={{ width: 250, height: 430 }}>
            <div className="p-5">
              {" "}
              <div className="h-[240px] overflow-hidden">
                <Image
                  src={image}
                  width={"100%"}
                  height={"auto"}
                  alt="Picture of the author"
                  className="h-[206px] "
                />
              </div>
            </div>

            <div className=" border-t-[0.2px] border-gray-300 px-5 py-3">
              <h1 className="text-sm text-accent font-primary font-medium ">
                {publisher_name}
              </h1>
              <h2 className="text-base font-primary h-[40px] mt-1 mb-5 font-semibold text-dark">
                {title}
              </h2>
              <h3 className="text-base font-primary mb-1 font-medium text-primary">
                ৳ {price}
              </h3>
            </div>
          </Card>
        </div>
      </Link>
    </div>
  );
};

export default RegularBookCard;
