import RootLayout from "@/component/Layouts/RootLayout";

const BookPage = () => {
  return <div>Book Page</div>;
};

export default BookPage;

BookPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
