import RootLayout from "@/component/Layouts/RootLayout";
import Loader from "@/component/UI/Loader/Loader";
import ShopCard from "@/component/UI/Shops/ShopCard";
import {
  useGetAllFilterableShopsQuery,
  useGetAllShopQuery,
  useGetShopAddressQuery,
} from "@/redux/features/shop/shopApi";
import CustomSearchOption from "@/shared/CustomSearchOption";
import { Breadcrumb, Input, Pagination, Select } from "antd";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineShop } from "react-icons/ai";

const { Search } = Input;

const AllShops = () => {
  const [street, setStreet] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const currentRoute = usePathname();

  const router = useRouter();
  console.log("router.query.allShops", router.query.allShops);

  const [streetArray, setStreetArray] = useState([]);
  const [areaArray, setAreaArray] = useState([]);
  const [cityArray, setCityArray] = useState([]);

  const onSearch = (value) => {
    // console.log("search:", value);
  };

  const locationOptions = [
    "",
    "Nilkhet Book Market",
    "BanglaBazar Book Market",
    "Aziz Super Market",
    "Rokomari Book Store",
    "Prothoma Prokashon Bookstores",
    "Pathak Shamabesh Center",
    "Batighar",
    "Jonaki Boi Ghar",
    "Bookworm",
    "Bookshelf",
    "Others",
  ];

  //! get all Shop Address
  const { data: shopAddress, isLoading, isError } = useGetShopAddressQuery();

  useEffect(() => {
    if (!isLoading && !isError && shopAddress?.data) {
      // console.log("Shop Address:", shopAddress.data);
      const newStreetArray = shopAddress.data.map((s) => s.address.street);
      setStreetArray(newStreetArray);
      // console.log("newStreetArray", newStreetArray);

      const newAreaArray = shopAddress.data.map((s) => s.address.area);
      setAreaArray(newAreaArray);
      const newCityArray = shopAddress.data.map((s) => s.address.city);
      setCityArray(newCityArray);
    }
  }, [shopAddress, isLoading, isError]);

  // //! get all Shops
  // const { data: AllShops } = useGetAllShopQuery(undefined, {
  //   refetchOnMountOrArgChange: true,
  //   // pollingInterval: 100,
  // });

  //! get all filterable Shops
  const {
    data: shops,
    isLoading2,
    isError2,
  } = useGetAllFilterableShopsQuery(
    { street, area, city, location, searchTerm },
    {
      refetchOnMountOrArgChange: true,
      pollingInterval: 5000,
    }
  );

  useEffect(() => {
    if (!isLoading2 && !isError2) {
      console.log("All shops:", AllShops?.data);
      console.log("filterShops:", shops);
    }
  }, [isLoading2, isError2, shops]);

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="min-h-screen">
      <div className="my-profile-bg py-24">
        <h1 className="text-center text-xl font-secondary text-gray-200">
          Find Your nearby shops
        </h1>
      </div>
      <div className="  py-4 px-4">
        <div className="my-5">
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
                title: (
                  <button
                    className={
                      currentRoute === "/shops"
                        ? "text-primary flex items-center gap-2 hover:text-primary font-semibold"
                        : "flex items-center gap-2 hover:text-primary font-semibold"
                    }
                  >
                    <AiOutlineShop className="  text-lg" />
                    <span>Shops</span>
                  </button>
                ),
              },
            ]}
          />
        </div>

        <div className="my-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-5 ">
            <div className="border sm:min-h-[100vh] shadow-md px-5 py-7">
              <div className="mb-5">
                <h1 className="text-[15px] text-dark my-2 font-semibold">
                  City
                </h1>
                <CustomSearchOption
                  item={cityArray}
                  option={setCity}
                ></CustomSearchOption>
              </div>
              <div className="mb-5">
                <h1 className="text-[15px] text-dark my-2 font-semibold">
                  Area
                </h1>
                <CustomSearchOption
                  item={areaArray}
                  option={setArea}
                ></CustomSearchOption>
              </div>
              <div className="mb-5">
                <h1 className="text-[15px] text-dark my-2 font-semibold">
                  Street
                </h1>
                <CustomSearchOption
                  item={streetArray}
                  option={setStreet}
                ></CustomSearchOption>
              </div>
              <div className="mb-5">
                <h1 className="text-[15px] text-dark my-2 font-semibold">
                  Location
                </h1>
                <CustomSearchOption
                  item={locationOptions}
                  option={setLocation}
                ></CustomSearchOption>
              </div>
            </div>
            <div className="md:col-span-4 border shadow-md px-3 py-5">
              <div>
                <Search
                  placeholder="Search Shop here"
                  onSearch={onSearch}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  // style={{
                  //   width: "100%",
                  // }}
                  className="md:w-[50%] mx-auto m-10 px-2"
                />
              </div>
              {isLoading2 && <Loader></Loader>}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4  gap-5 ">
                {shops?.data?.map((shop, i) => (
                  <ShopCard shop={shop} key={i}></ShopCard>
                ))}
              </div>
              <div className="my-10 flex items-center justify-center">
                <Pagination defaultCurrent={1} total={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllShops;

AllShops.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
