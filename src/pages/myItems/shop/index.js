import MyItemsLayout from "@/component/Layouts/MyItemsLayout";
import RootLayout from "@/component/Layouts/RootLayout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useGetMyShopQuery } from "@/redux/features/shop/shopApi";
import EditShopModal from "@/component/UI/MyItems/Shops/EditShopModal";

const MyShop = () => {
  const [editShop, setEditShop] = useState(false);
  const handleEditModel = () => {
    setEditShop(!editShop);
  };

  //! get My Shop
  const {
    data: myShopData,
    isLoading,
    isError,
  } = useGetMyShopQuery(undefined, {
    refetchOnMountOrArgChange: true,
    // pollingInterval: 500,
  });

  useEffect(() => {
    if (!isLoading && !isError) {
      console.log("My Shop Data:", myShopData?.data?.location);
    }
  }, [myShopData, isLoading, isError]);

  return (
    <div>
      <button onClick={handleEditModel} className="bk-input-button w-[120px] ">
        Edit Shop
      </button>
      {!myShopData && (
        <div className="flex items-center justify-center py-16 mb-10 border bg-[#438e9320]">
          <Link href={"/myItems/shop/createShop"}>
            {" "}
            <button className="font-semibold text-xl text-primary font-primary">
              Create a shop
            </button>
          </Link>
        </div>
      )}

      {editShop && (
        <EditShopModal
          myShopData={myShopData}
          handleClose={handleEditModel}
          clicked={editShop}
        ></EditShopModal>
      )}
    </div>
  );
};

export default MyShop;

MyShop.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <MyItemsLayout>{page}</MyItemsLayout>
    </RootLayout>
  );
};
