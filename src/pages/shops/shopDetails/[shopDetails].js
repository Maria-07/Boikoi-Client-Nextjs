/* eslint-disable react-hooks/rules-of-hooks */
import RootLayout from "@/component/Layouts/RootLayout";
import UserInfo from "@/hook/UserInfo";
import { useGetSingleShopQuery } from "@/redux/features/shop/shopApi";
import { Breadcrumb, Image, Table } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AiOutlineHome, AiTwotoneShop } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";

const shopDetails = () => {
  const currentRoute = usePathname();

  //! User data
  const user = UserInfo();
  console.log(user);

  //! param from query
  const router = useRouter();
  const { query } = router;
  const id = query.shopDetails;
  // console.log(id);

  //! Single shop details :
  const {
    data: shopData,
    isLoading,
    isError,
  } = useGetSingleShopQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 5000,
  });

  // console.log("getSingleShop", shopData);

  useEffect(() => {
    if (!isLoading && !isError) {
      console.log("My Shop Data:", shopData);
    }
  }, [shopData, isLoading, isError]);

  const myShopData = shopData?.data;

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
      value: myShopData?.shop_number,
      feature: "Shop Number",
    },
    {
      key: 2,
      value: myShopData?.contact_number,
      feature: "Shop Contact",
    },
    {
      key: 3,
      value: myShopData?.location,
      feature: "Shop Location",
    },
    {
      key: 4,
      value: myShopData?.address?.street,
      feature: "Street",
    },
    {
      key: 5,
      value: myShopData?.address?.area,
      feature: "Area",
    },
    {
      key: 6,
      value: myShopData?.address?.city,
      feature: "City",
    },
    {
      key: 7,
      value: myShopData?.shop_weekend,
      feature: "Shop Weekend",
    },
    {
      key: 8,
      value: myShopData?.shop_open_time,
      feature: "Shop Open Time",
    },
    {
      key: 9,
      value: myShopData?.shop_close_time,
      feature: "Shop Close Time",
    },
    {
      key: 10,
      value: myShopData?.book_shop_ratings,
      feature: "Ratings",
    },
  ];
  return (
    <div>
      <div>
        <div className="h-[40vh]  overflow-hidden">
          <Image
            src={shopData?.data?.image}
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
                      <span>{myShopData?.shop_name}</span>
                    </button>
                  ),
                },
              ]}
            />
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <h1 className="text-3xl text-secondary font-secondary">
                {myShopData?.shop_name}
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
              <p>{myShopData?.description}</p>
              {user?.email === myShopData?.userEmail && (
                <div>
                  <div className="my-10 flex items-center  gap-4">
                    <Link href={"/myItems/shop"}>
                      <button className="bk-input-button">Edit BookShop</button>
                    </Link>
                    <Link href={"/myItems/shop"}>
                      <button className="bk-input-red-button">Delete</button>
                    </Link>
                  </div>
                </div>
              )}

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
