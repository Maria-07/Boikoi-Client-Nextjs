import { Avatar, Card, Rate } from "antd";
import { BsPersonCircle } from "react-icons/bs";

const Review = () => {
  return (
    <div className="">
      <div className="border-[0.2px] border-gray-300 rounded-sm">
        <Card hoverable style={{ width: "auto", height: "auto" }}>
          <div className="py-7 px-5 mx-auto">
            <div className="flex items-center justify-center">
              <Avatar icon={<BsPersonCircle className="text-3xl" />} />
            </div>

            <h1 className="text-center text-base font-semibold text-dark mt-2">
              User Name
            </h1>
            <h1 className="text-center text-sm text-accent mb-4">User Role</h1>
            <p className="text-center text-sm text-black font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              voluptatibus, dolorum a, quod placeat praesentium blanditiis
            </p>
            <div className="flex items-center justify-center my-6">
              <Rate allowHalf disabled defaultValue={4.5} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Review;
