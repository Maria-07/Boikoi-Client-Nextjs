import MyItemsLayout from "@/component/Layouts/MyItemsLayout";
import RootLayout from "@/component/Layouts/RootLayout";
import RegularBookCard from "@/component/UI/Books/RegularBooks/RegularBookCard";
import AddNewBookModal from "@/component/UI/MyItems/Books/AddNewBookModal";
import UserInfo from "@/hook/UserInfo";
import { useGetAllMyBooksQuery } from "@/redux/features/book/bookApi";
import { Divider } from "antd";
import { useEffect, useState } from "react";

const MyBooks = () => {
  const [addNewBook, setAddNewBook] = useState(false);
  const handleAddBookModel = () => {
    setAddNewBook(!addNewBook);
  };

  //! User data
  const user = UserInfo();

  const mail = user?.email;

  //! get all My Books
  const {
    data: books,
    isLoading,
    isError,
  } = useGetAllMyBooksQuery(
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

  return (
    <div>
      <div className="flex items-end justify-between sm:px-6 mt-3 ">
        <h1 className="text-base text-gray-600 font-semibold border-gray-200 ">
          My Books
        </h1>
        <button onClick={handleAddBookModel} className="bk-input-button ">
          Add New Book
        </button>
      </div>
      <Divider className="mb-12 "></Divider>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 ">
        {books?.data?.map((book, i) => (
          <RegularBookCard book={book} key={i}></RegularBookCard>
        ))}
      </div>
      {addNewBook && (
        <AddNewBookModal
          handleClose={handleAddBookModel}
          clicked={addNewBook}
        ></AddNewBookModal>
      )}
    </div>
  );
};

export default MyBooks;

MyBooks.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <MyItemsLayout>{page}</MyItemsLayout>
    </RootLayout>
  );
};
