import MyItemsLayout from "@/component/Layouts/MyItemsLayout";
import RootLayout from "@/component/Layouts/RootLayout";
import AddOldBooks from "@/component/UI/MyItems/OldBooks/AddOldBooks";
import { useState } from "react";

const OldBooks = () => {
  const [addOldBook, setAddOldBook] = useState(false);
  const handleAddBookModel = () => {
    setAddOldBook(!addOldBook);
  };
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
