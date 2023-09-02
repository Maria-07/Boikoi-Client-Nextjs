import React from "react";
import MyItemsNavbar from "../UI/Layouts/MyItemsNavbar";

const MyItemsLayout = ({ children }) => {
  return (
    <>
      <div className="2xl:w-[90%] xl:mx-auto py-4 my-10 px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-5 ">
          <div className="border rounded-md shadow-md">
            <MyItemsNavbar></MyItemsNavbar>
          </div>
          <div className="xl:col-span-4 lg:col-span-3 md:col-span-2 border rounded-md p-3">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyItemsLayout;
