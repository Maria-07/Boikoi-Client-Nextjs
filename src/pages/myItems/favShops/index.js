import MyItemsLayout from "@/component/Layouts/MyItemsLayout";
import RootLayout from "@/component/Layouts/RootLayout";
import React from "react";

const favShops = () => {
  return <div></div>;
};

export default favShops;

favShops.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <MyItemsLayout>{page}</MyItemsLayout>
    </RootLayout>
  );
};
