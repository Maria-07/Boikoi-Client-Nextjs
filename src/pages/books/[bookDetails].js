import RootLayout from "@/component/Layouts/RootLayout";
import React from "react";

const bookDetails = () => {
  return <div>bookDetails</div>;
};

export default bookDetails;

bookDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
