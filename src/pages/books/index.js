import RootLayout from "@/component/Layouts/RootLayout";
import AllBooks from "./[allBooks]";

const BookPage = () => {
  return (
    <>
      <AllBooks></AllBooks>
    </>
  );
};

export default BookPage;

BookPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
