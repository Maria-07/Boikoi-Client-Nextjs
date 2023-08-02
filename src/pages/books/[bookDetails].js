import RootLayout from "@/component/Layouts/RootLayout";

const bookDetails = () => {
  return <div>bookDetails</div>;
};

export default bookDetails;

bookDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
