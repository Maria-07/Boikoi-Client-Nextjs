/* eslint-disable react-hooks/rules-of-hooks */
import RootLayout from "@/component/Layouts/RootLayout";
import { Breadcrumb, Image, Table } from "antd";
import { usePathname } from "next/navigation";
import { AiOutlineHome, AiTwotoneShop } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";

const shopDetails = () => {
  const currentRoute = usePathname();

  const shop = {
    shop_name: "Page Turner Books",
    shop_number: "54321",
    contact_number: "9876543210",
    image: "https://example.com/page_turner_books.jpg",
    location: "Gulshan",
    address: {
      street: "Gulshan Avenue",
      area: "Gulshan",
      city: "Dhaka",
    },
    shop_weekend: "Saturday, Sunday",
    shop_open_time: "9:00 AM",
    shop_close_time: "7:00 PM",
    book_shop_ratings: 4.3,
    userEmail: "pageturner@example.com",
  };

  const columns = [
    {
      // title: "Features",
      dataIndex: "feature",
      key: "feature",
      width: 100,
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" text-dark font-semibold  text-base">
            {record?.feature}
          </div>
        );
      },
      rowScope: "row",
    },
    {
      // title: "Value",
      dataIndex: "value",
      key: "value",
      width: 200,
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" text-secondary font-medium font-secondary text-base">
            {record?.value}
          </div>
        );
      },
    },
  ];

  const data = [
    {
      key: 1,
      value: shop?.shop_number,
      feature: "Shop Number",
    },
    {
      key: 2,
      value: shop?.contact_number,
      feature: "Shop Contact",
    },
    {
      key: 3,
      value: shop?.location,
      feature: "Shop Location",
    },
    {
      key: 4,
      value: shop?.address?.street,
      feature: "Street",
    },
    {
      key: 5,
      value: shop?.address?.area,
      feature: "Area",
    },
    {
      key: 6,
      value: shop?.address?.city,
      feature: "City",
    },
    {
      key: 7,
      value: shop?.shop_weekend,
      feature: "Shop Weekend",
    },
    {
      key: 8,
      value: shop?.shop_open_time,
      feature: "Shop Open Time",
    },
    {
      key: 9,
      value: shop?.shop_close_time,
      feature: "Shop Open Time",
    },
    {
      key: 10,
      value: shop?.book_shop_ratings,
      feature: "Ratings",
    },
  ];
  return (
    <div>
      <div>
        <div className="h-[40vh]  overflow-hidden">
          <Image
            src="https://www.dickins.co.uk/wp-content/uploads/Old-Town-Bookshop.jpg"
            width={"100vw"}
            // height={"auto"}
            alt="Picture of the author"
            className=""
          ></Image>
        </div>
        <div className="lg:w-[80%] lg:mx-auto py-4 my-10 px-4">
          <div className="mt-5 mb-10">
            {" "}
            <Breadcrumb
              items={[
                {
                  href: "/",
                  title: (
                    <AiOutlineHome className="hover:text-primary font-semibold text-lg mt-[2px]" />
                  ),
                },
                {
                  href: "/shops",
                  title: (
                    <button
                      className={
                        currentRoute === "/shops"
                          ? "text-primary flex items-center gap-2 hover:text-primary font-semibold"
                          : "flex items-center gap-2 hover:text-primary font-semibold"
                      }
                    >
                      <AiTwotoneShop className="  text-lg" />
                      <span>Shops</span>
                    </button>
                  ),
                },
                {
                  title: (
                    <button className="text-primary flex items-center gap-2 hover:text-primary font-semibold">
                      <AiTwotoneShop className="  text-lg" />
                      <span>{shop?.shop_name}</span>
                    </button>
                  ),
                },
              ]}
            />
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <h1 className="text-3xl text-secondary font-secondary">
                {shop?.shop_name}
              </h1>
              <hr className="my-3" />
              <div>
                <div className="my-5">
                  <div>
                    <h1 className="text-base text-gray-600 font-semibold border-gray-200 pb-2">
                      # Specific Details
                    </h1>
                  </div>
                  <div className=" sm:overflow-x-hidden overflow-x-scroll">
                    <Table
                      pagination={false}
                      columns={columns}
                      dataSource={data}
                      bordered
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-base text-gray-600 font-semibold border-gray-200 pb-2 mt-16">
                # Shop Description
              </h1>
              <hr className="my-3" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                repudiandae magnam fuga possimus facilis amet, nam iure dolor,
                ipsam tenetur tempora ipsum quod debitis sit. Sapiente unde
                laboriosam doloremque maxime?
              </p>
              <div>
                <div className="my-10 flex items-center  gap-4">
                  <button
                    // onClick={handleUpdateBook}
                    className="bk-input-button"
                  >
                    Edit BookShop
                  </button>
                  <button
                    // onClick={handleDeleteBook}
                    className="bk-input-red-button"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="my-10">
                <h1 className="text-[16px] font-semibold  text-primary">
                  Share This BookShop
                </h1>
                <div className="flex items-center gap-5 my-4">
                  <FaFacebookF className="text-4xl p-2 border hover:bg-blue-700 hover:text-white" />
                  <FaInstagram className="text-4xl p-2 border hover:bg-rose-700 hover:text-white" />
                  <FaTwitch className="text-4xl p-2 border hover:bg-purple-700 hover:text-white" />
                  <FaTwitter className="text-4xl p-2 border hover:bg-sky-700 hover:text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default shopDetails;

shopDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
