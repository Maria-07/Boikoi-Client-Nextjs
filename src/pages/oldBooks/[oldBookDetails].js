import RootLayout from "@/component/Layouts/RootLayout";

const oldBookDetails = () => {
  return <div>oldBookDetails</div>;
};

export default oldBookDetails;

oldBookDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
