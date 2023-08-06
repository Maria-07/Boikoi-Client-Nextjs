import { Card } from "antd";
import Image from "next/image";
import SImage from "../../../assets/img/Bookshop-cuate.png";
import Link from "next/link";

const ShopCard = ({ shop }) => {
  const { shop_name, location, address, contact_number } = shop;
  return (
    <div className="mx-auto">
      <Link href={"/shops/123"}>
        <Card hoverable style={{ width: 260 }}>
          <div className="relative w-full ">
            <Image
              src={SImage}
              width={"auto"}
              height={"auto"}
              alt="Picture of the author"
              className=" "
            />
          </div>

          <div className="  p-5">
            <h2 className="text-[20px] font-primary  mt-1 font-semibold text-dark">
              {shop_name}
            </h2>
            <h1 className="text-[16px] text-accent font-primary font-medium ">
              {address.street}, {address.city}
            </h1>

            <h3 className="text-[15px] mt-2 font-semibold text-dark ">
              Shop Location : <span className="text-primary">{location}</span>
            </h3>

            <h3 className="text-[15px]  mb-2 font-semibold text-dark ">
              Contact : <span className="text-primary">{contact_number}</span>
            </h3>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default ShopCard;
