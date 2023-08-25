import MyItemsLayout from "@/component/Layouts/MyItemsLayout";
import RootLayout from "@/component/Layouts/RootLayout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useGetMyShopQuery } from "@/redux/features/shop/shopApi";
import EditShopModal from "@/component/UI/MyItems/Shops/EditShopModal";
import MyShopDetails from "@/component/UI/MyItems/Shops/MyShopDetails";
import DeleteShopModal from "@/component/UI/MyItems/Shops/DeleteShopModal";

const MyShop = () => {
  const [editShop, setEditShop] = useState(false);
  const [deleteShop, setDeleteShop] = useState(false);

  const handleEditModel = () => {
    setEditShop(!editShop);
  };
  const handleDeleteModel = () => {
    setDeleteShop(!deleteShop);
  };

  //! get My Shop
  const {
    data: myShopData,
    isLoading,
    isError,
  } = useGetMyShopQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 500,
  });

  useEffect(() => {
    if (!isLoading && !isError) {
      console.log("My Shop Data:", myShopData);
    }
  }, [myShopData, isLoading, isError]);

  if (isLoading) {
    <>Loading</>;
  }
  return (
    <div>
      {myShopData?.data === null ? (
        <div className="flex items-center justify-center py-16 mb-10 border bg-[#438e9320]">
          <Link href={"/myItems/shop/createShop"}>
            {" "}
            <button className="font-semibold text-xl text-primary font-primary">
              Create a shop
            </button>
          </Link>
        </div>
      ) : (
        <>
          <MyShopDetails myShopData={myShopData?.data}></MyShopDetails>
          <div className="flex items-center gap-3 my-10">
            <button onClick={handleEditModel} className="bk-input-button ">
              Edit Shop Details
            </button>
            <button
              onClick={handleDeleteModel}
              className="bk-input-red-button my-5"
            >
              Delete
            </button>
          </div>
        </>
      )}

      {editShop && (
        <EditShopModal
          myShopData={myShopData}
          handleClose={handleEditModel}
          clicked={editShop}
        ></EditShopModal>
      )}

      {deleteShop && (
        <DeleteShopModal
          myShopData={myShopData}
          handleClose={handleDeleteModel}
          clicked={deleteShop}
        ></DeleteShopModal>
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
