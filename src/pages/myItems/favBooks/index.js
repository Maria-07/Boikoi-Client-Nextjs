import MyItemsLayout from "@/component/Layouts/MyItemsLayout";
import RootLayout from "@/component/Layouts/RootLayout";

const favBooks = () => {
  return <div></div>;
};

export default favBooks;

favBooks.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <MyItemsLayout>{page}</MyItemsLayout>
    </RootLayout>
  );
};
