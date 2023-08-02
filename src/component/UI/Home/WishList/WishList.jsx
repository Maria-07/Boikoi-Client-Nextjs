import { Card, Image } from "antd";
import book from "../../../../assets/img/wishList.jpg";

const WishList = () => {
  return (
    <div className="my-2">
      <Card hoverable>
        <div className="flex items-center gap-5">
          {" "}
          <div className="mt-1">
            <Image
              src="https://tmm.chicagodistributioncenter.com/IsbnImages/9780226116495.jpg"
              width={70}
              height={90}
              alt="Picture of the author"
            ></Image>
          </div>
          <div>
            <h2 className="text-[20px] font-primary font-semibold text-dark">
              Physic Book
            </h2>{" "}
            <h1 className="text-[16px] text-accent font-primary font-medium ">
              Author Name : Newton
            </h1>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default WishList;
