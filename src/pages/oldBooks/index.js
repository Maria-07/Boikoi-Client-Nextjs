import RootLayout from "@/component/Layouts/RootLayout";
import React from "react";

const OldBooks = () => {
  return <div>old books</div>;
};

export default OldBooks;

OldBooks.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
