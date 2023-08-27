import { useGetSingleShopQuery } from "@/redux/features/shop/shopApi";
import { Image } from "antd";
import Link from "next/link";
import { useEffect } from "react";

const ShopDetails = ({ id }) => {
  //   console.log(id);

  //! Single shop details :
  const {
    data: shopData,
    isLoading,
    isError,
  } = useGetSingleShopQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 5000,
  });

  useEffect(() => {
    if (!isLoading && !isError) {
      console.log("My Shop Data:", shopData);
    }
  }, [shopData, isLoading, isError, id]);

  const myShopData = shopData?.data;
  //   console.log(myShopData);
  return (
    <div>
      <Link href={`/shops/shopDetails/${id}`}>
        <h1 className="text-3xl text-secondary font-secondary">
          {myShopData?.shop_name}
        </h1>
      </Link>

      <hr className="my-3" />
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-3 ">
        <div>
          <table className="min-w-full border-[1px] border-gray-200 my-8 overflow-x-scroll">
            <tbody>
              <tr className="border-b border-[1px] border-gray-500 ">
                <td className="text-sm font-semibold text-dark  bg-gray-100 px-2 py-3 whitespace-nowrap border-r border-gray-200 border-[1px] border-b-gray-200">
                  Shop Number
                </td>
                <td className="text-sm  font-light px-2 py-3 whitespace-nowrap border border-gray-200 border-1">
                  {myShopData?.shop_number}
                </td>
              </tr>
              <tr className="border-b border-[1px] border-gray-500 ">
                <td className="text-sm font-semibold text-dark  bg-gray-100 px-2 py-3 whitespace-nowrap border-r border-gray-200 border-[1px] border-b-gray-200">
                  Shop Contact
                </td>
                <td className="text-sm  font-light px-2 py-3 whitespace-nowrap border border-gray-200 border-1">
                  {myShopData?.contact_number}
                </td>
              </tr>
              <tr className="border-b border-[1px] border-gray-500 ">
                <td className="text-sm font-semibold text-dark  bg-gray-100 px-2 py-3 whitespace-nowrap border-r border-gray-200 border-[1px] border-b-gray-200">
                  Shop Location
                </td>
                <td className="text-sm  font-light px-2 py-3 whitespace-nowrap border border-gray-200 border-1">
                  {myShopData?.location}
                </td>
              </tr>
              <tr className="border-b border-[1px] border-gray-500 ">
                <td className="text-sm font-semibold text-dark  bg-gray-100 px-2 py-3 whitespace-nowrap border-r border-gray-200 border-[1px] border-b-gray-200">
                  Street
                </td>
                <td className="text-sm  font-light px-2 py-3 whitespace-nowrap border border-gray-200 border-1">
                  {myShopData?.address?.street}
                </td>
              </tr>
              <tr className="border-b border-[1px] border-gray-500 ">
                <td className="text-sm font-semibold text-dark  bg-gray-100 px-2 py-3 whitespace-nowrap border-r border-gray-200 border-[1px] border-b-gray-200">
                  Area
                </td>
                <td className="text-sm   font-light px-2 py-3 whitespace-nowrap border border-gray-200 border-1">
                  {myShopData?.address?.area}
                </td>
              </tr>
              <tr className="border-b border-[1px] border-gray-500 ">
                <td className="text-sm font-semibold text-dark  bg-gray-100 px-2 py-3 whitespace-nowrap border-r border-gray-200 border-[1px] border-b-gray-200">
                  City
                </td>
                <td className="text-sm  font-light px-2 py-3 whitespace-nowrap border border-gray-200 border-1">
                  {myShopData?.address?.city}
                </td>
              </tr>
              <tr className="border-b border-[1px] border-gray-500 ">
                <td className="text-sm font-semibold text-dark  bg-gray-100 px-2 py-3 whitespace-nowrap border-r border-gray-200 border-[1px] border-b-gray-200">
                  City
                </td>
                <td className="text-sm  font-light px-2 py-3 whitespace-nowrap border border-gray-200 border-1">
                  {myShopData?.address?.city}
                </td>
              </tr>
              <tr className="border-b border-[1px] border-gray-500 ">
                <td className="text-sm font-semibold text-dark  bg-gray-100 px-2 py-3 whitespace-nowrap border-r border-gray-200 border-[1px] border-b-gray-200">
                  Shop Weekend
                </td>
                <td className="text-sm  font-light px-2 py-3 whitespace-nowrap border border-gray-200 border-1">
                  {myShopData?.shop_weekend}
                </td>
              </tr>
              <tr className="border-b border-[1px] border-gray-500 ">
                <td className="text-sm font-semibold text-dark  bg-gray-100 px-2 py-3 whitespace-nowrap border-r border-gray-200 border-[1px] border-b-gray-200">
                  Shop Open Time
                </td>
                <td className="text-sm  font-light px-2 py-3 whitespace-nowrap border border-gray-200 border-1">
                  {myShopData?.shop_open_time}
                </td>
              </tr>
              <tr className="border-b border-[1px] border-gray-500 ">
                <td className="text-sm font-semibold text-dark  bg-gray-100 px-2 py-3 whitespace-nowrap border-r border-gray-200 border-[1px] border-b-gray-200">
                  Shop Close Time
                </td>
                <td className="text-sm  font-light px-2 py-3 whitespace-nowrap border border-gray-200 border-1">
                  {myShopData?.shop_close_time}
                </td>
              </tr>
              <tr className="border-b border-[1px] border-gray-500 ">
                <td className="text-sm font-semibold text-dark  bg-gray-100 px-2 py-3 whitespace-nowrap border-r border-gray-200 border-[1px] border-b-gray-200">
                  Ratings
                </td>
                <td className="text-sm  font-light px-2 py-3 whitespace-nowrap border border-gray-200 border-1">
                  {myShopData?.book_shop_ratings}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-8">
          <Image
            src={shopData?.data?.image}
            width={"100%"}
            height={"auto"}
            alt="Picture of the author"
          ></Image>
        </div>{" "}
      </div>
    </div>
  );
};

export default ShopDetails;
