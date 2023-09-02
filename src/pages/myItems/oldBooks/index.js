import MyItemsLayout from "@/component/Layouts/MyItemsLayout";
import RootLayout from "@/component/Layouts/RootLayout";
import Loader from "@/component/UI/Loader/Loader";
import AddOldBooks from "@/component/UI/MyItems/OldBooks/AddOldBooks";
import OldBookCard from "@/component/UI/OldBooks/OldBookCard";
import UserInfo from "@/hook/UserInfo";
import { useGetAllMyOldBooksQuery } from "@/redux/features/oldBook/oldBookApi";
import { Divider } from "antd";
import { useEffect, useState } from "react";

const OldBooks = () => {
  const [addOldBook, setAddOldBook] = useState(false);
  const handleAddBookModel = () => {
    setAddOldBook(!addOldBook);
  };

  //! User data
  const user = UserInfo();

  const mail = user?.email;

  //! get all My Books
  const {
    data: books,
    isLoading,
    isError,
  } = useGetAllMyOldBooksQuery(
    { mail },
    {
      refetchOnMountOrArgChange: true,
      pollingInterval: 5000,
    }
  );

  useEffect(() => {
    if (!isLoading && !isError) {
      // console.log("books mine:", books);
    }
  }, [isLoading, isError, books]);

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div className="flex items-end justify-between sm:px-6 mt-3 ">
        <h1 className="text-base text-gray-600 font-semibold border-gray-200 ">
          My Books
        </h1>
        <button onClick={handleAddBookModel} className="bk-input-button ">
          Add Old Book
        </button>
      </div>
      <Divider className="mb-12 "></Divider>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 ">
        {books?.data?.map((book, i) => (
          <OldBookCard book={book} key={i}></OldBookCard>
        ))}
      </div>
      {addOldBook && (
        <AddOldBooks
          handleClose={handleAddBookModel}
          clicked={addOldBook}
        ></AddOldBooks>
      )}
    </div>
  );
};

export default OldBooks;

OldBooks.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <MyItemsLayout>{page}</MyItemsLayout>
    </RootLayout>
  );
};
