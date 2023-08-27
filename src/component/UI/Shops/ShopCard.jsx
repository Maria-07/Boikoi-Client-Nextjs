import { Card, Image } from "antd";

import SImage from "../../../assets/img/Bookshop-cuate.png";
import Link from "next/link";

const ShopCard = ({ shop }) => {
  const { shop_name, location, address, contact_number, image, id } = shop;
  return (
    <div className="mx-auto">
      <Link href={`/shops/shopDetails/${id}`}>
        <Card hoverable style={{ width: 260, height: 450 }}>
          <div className="relative w-full ">
            <Image
              src={image}
              width={"260px"}
              height={"190px"}
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
