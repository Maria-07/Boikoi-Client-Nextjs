import RootLayout from "@/component/Layouts/RootLayout";

const ShopPage = () => {
  return <div>ShopPage</div>;
};

export default ShopPage;

ShopPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
