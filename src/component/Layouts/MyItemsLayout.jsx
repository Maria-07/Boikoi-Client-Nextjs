import React from "react";
import MyItemsNavbar from "../UI/Layouts/MyItemsNavbar";

const MyItemsLayout = ({ children }) => {
  return (
    <>
      <div className="xl:w-[80%] xl:mx-auto py-4 my-10 px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-5 ">
          <div className="border rounded-md shadow-md">
            <MyItemsNavbar></MyItemsNavbar>
          </div>
          <div className="sm:col-span-5 border rounded-md p-3">{children}</div>
        </div>
      </div>
    </>
  );
};

export default MyItemsLayout;
