import MyItemsLayout from "@/component/Layouts/MyItemsLayout";
import RootLayout from "@/component/Layouts/RootLayout";
import AddNewBookModal from "@/component/UI/MyItems/Books/AddNewBookModal";
import { useState } from "react";

const MyBooks = () => {
  const [addNewBook, setAddNewBook] = useState(false);
  const handleAddBookModel = () => {
    setAddNewBook(!addNewBook);
  };

  return (
    <div>
      <button onClick={handleAddBookModel} className="bk-input-button ">
        Add New Book
      </button>
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
