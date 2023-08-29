import RootLayout from "@/component/Layouts/RootLayout";
import React from "react";

const OldBookDetails = () => {
  return <div>OldBookDetails</div>;
};

export default OldBookDetails;

OldBookDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
