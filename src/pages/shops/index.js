import RootLayout from "@/component/Layouts/RootLayout";
import AllShops from "./[allShops]";

const ShopsPage = () => {
  return (
    <>
      <AllShops></AllShops>
    </>
  );
};

export default ShopsPage;

ShopsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
