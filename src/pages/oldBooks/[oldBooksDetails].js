import RootLayout from "@/component/Layouts/RootLayout";
import OldBookImageUpdateModal from "@/component/UI/ImageUpdate/OldBookImageUpdateModal";
import DeleteOldBookModal from "@/component/UI/MyItems/OldBooks/DeleteBookModal";
import EditOldBookModal from "@/component/UI/MyItems/OldBooks/EditOldBookModal";
import UserInfo from "@/hook/UserInfo";
import { useGetSingleOldBookQuery } from "@/redux/features/oldBook/oldBookApi";
import { Breadcrumb, Image } from "antd";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiBookBookmark, BiBookOpen } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";

const OldBookDetails = () => {
  const currentRoute = usePathname();

  //! User data
  const user = UserInfo();

  const [editOldBook, setEditOldBook] = useState(false);
  const [editImageBook, setEditImageBook] = useState(false);
  const [deleteOldBook, setDeleteOldBook] = useState(false);

  const handleEditOldBookModel = () => {
    setEditOldBook(!editOldBook);
  };
  const handleEditImageBookModel = () => {
    setEditImageBook(!editImageBook);
  };
  const handleDeleteOldBookModel = () => {
    setDeleteOldBook(!deleteOldBook);
  };

  //! param from query
  const router = useRouter();
  const { query } = router;
  const id = query.oldBooksDetails;
  console.log(id);

  //! Single Book details :
  const {
    data: bookData,
    isLoading,
    isError,
  } = useGetSingleOldBookQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 5000,
  });

  useEffect(() => {
    if (!isLoading && !isError) {
      console.log("My old Book Data:", bookData);
    }
  }, [bookData, isLoading, isError, id]);

  const book = bookData?.data;

  return (
    <div>
      {" "}
      <div className="xl:w-[80%] xl:mx-auto py-4 my-10 px-4">
        <div className="mt-5 mb-5">
          <Breadcrumb
            items={[
              {
                href: "/",
                title: (
                  <AiOutlineHome className="hover:text-primary font-semibold text-lg mt-[2px]" />
                ),
              },
              {
                href: "/oldBooks",
                title: (
                  <button
                    className={
                      currentRoute === "/oldBooks"
                        ? "text-primary flex items-center gap-2 hover:text-primary font-semibold"
                        : "flex items-center gap-2 hover:text-primary font-semibold"
                    }
                  >
                    <BiBookOpen className="  text-lg" />
                    <span>Old Books</span>
                  </button>
                ),
              },
              {
                title: (
                  <button className="text-primary flex items-center gap-2 hover:text-primary font-semibold">
                    <BiBookBookmark className="  text-lg" />
                    <span>{book?.title}</span>
                  </button>
                ),
              },
            ]}
          />
        </div>

        <hr />
        <div className="flex justify-center gap-10 lg:flex-nowrap flex-wrap my-16">
          <div className="mt-2">
            <div className="sm:p-10 p-3 border ">
              <div className="w-[350px] h-[550px] overflow-hidden">
                <Image
                  src={book?.image}
                  width={"100%"}
                  height={"100%"}
                  alt="Picture of the author"
                ></Image>
              </div>
            </div>

            {book?.customer?.email === user?.email && (
              <div className="my-2">
                <button
                  onClick={handleEditImageBookModel}
                  className="text-xs px-2 py-1 rounded-sm hover:bg-primary hover:text-white bg-gray-100 border"
                >
                  Edit Image
                </button>
              </div>
            )}
          </div>

          <div className="sm:px-5 px-2">
            <div>
              <h1 className="text-2xl mb-3 font-secondary font-regular text-secondary">
                {book?.title}
              </h1>
              <div className="text-primary font-semibold mt-[3px]">
                {book?.price} BDT
              </div>
              <div className=" mt-[2px] text-accent">
                Seller Contact:{" "}
                <span className="text-dark">{book?.customer?.contact}</span>
              </div>
              <hr className="mt-3" />
            </div>
            <div>
              <table className="min-w-full border-[1px] border-gray-200 my-8 overflow-x-scroll">
                <tbody>
                  <tr className="border-b border-[1px] border-gray-500 ">
                    <td className="text-sm font-semibold text-dark  bg-gray-100 px-2 py-3 whitespace-nowrap border-r border-gray-200 border-[1px] border-b-gray-200">
                      Author Name
                    </td>
                    <td className="text-sm  font-light px-2 py-3 whitespace-nowrap border border-gray-200 border-1">
                      {book?.author_name}
                    </td>
                  </tr>
                  <tr className="border-b border-[1px] border-gray-500 ">
                    <td className="text-sm font-semibold text-dark  bg-gray-100 px-2 py-3 whitespace-nowrap border-r border-gray-200 border-[1px] border-b-gray-200">
                      Publisher Name
                    </td>
                    <td className="text-sm  font-light px-2 py-3 whitespace-nowrap border border-gray-200 border-1">
                      {book?.publisher_name}
                    </td>
                  </tr>

                  <tr className="border-b border-[1px] border-gray-500 ">
                    <td className="text-sm font-semibold text-dark  bg-gray-100 px-2 py-3 whitespace-nowrap border-r border-gray-200 border-[1px] border-b-gray-200">
                      Class Level
                    </td>
                    <td className="text-sm  font-light px-2 py-3 whitespace-nowrap border border-gray-200 border-1">
                      {book?.class_level}
                    </td>
                  </tr>
                  <tr className="border-b border-[1px] border-gray-500 ">
                    <td className="text-sm font-semibold text-dark  bg-gray-100 px-2 py-3 whitespace-nowrap border-r border-gray-200 border-[1px] border-b-gray-200">
                      Faculty Name
                    </td>
                    <td className="text-sm  font-light px-2 py-3 whitespace-nowrap border border-gray-200 border-1">
                      {book?.faculty_name}
                    </td>
                  </tr>

                  <tr className="border-b border-[1px] border-gray-500 ">
                    <td className="text-sm font-semibold text-dark  bg-gray-100 px-2 py-3 whitespace-nowrap border-r border-gray-200 border-[1px] border-b-gray-200">
                      Price
                    </td>
                    <td className="text-sm text-primary  font-semibold px-2 py-3 whitespace-nowrap border border-gray-200 border-1">
                      {book?.price} BDT
                    </td>
                  </tr>
                  <tr className="border-b border-[1px] border-gray-500 ">
                    <td className="text-sm font-semibold text-dark  bg-gray-100 px-2 py-3 whitespace-nowrap border-r border-gray-200 border-[1px] border-b-gray-200">
                      Last Edition
                    </td>
                    <td className="text-sm  font-light px-2 py-3 whitespace-nowrap border border-gray-200 border-1">
                      {book?.Last_edition}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <p className="sm:w-[500px] my-10">
                <span className="font-semibold">Description : </span>
                {book?.description}
              </p>
            </div>

            <div className="my-10 flex items-center  gap-1">
              <button className="px-3 py-1 border border-gray-400  leading-7 shadow-md text-[15px] hover:bg-secondary hover:text-white rounded-md">
                Add to Favorite
              </button>
            </div>

            <div>
              <h1 className="text-[16px] font-semibold  text-primary">
                Share This Book
              </h1>
              <div className="flex items-center gap-5 my-4">
                <FaFacebookF className="text-4xl p-2 border hover:bg-blue-700 hover:text-white" />
                <FaInstagram className="text-4xl p-2 border hover:bg-rose-700 hover:text-white" />
                <FaTwitch className="text-4xl p-2 border hover:bg-purple-700 hover:text-white" />
                <FaTwitter className="text-4xl p-2 border hover:bg-sky-700 hover:text-white" />
              </div>
            </div>

            {book?.customer?.email === user?.email && (
              <div>
                <div className="mt-10 mb-5 flex items-center  gap-4">
                  <button
                    onClick={handleEditOldBookModel}
                    className="bk-input-button"
                  >
                    Edit BookShop
                  </button>
                  <button
                    onClick={handleDeleteOldBookModel}
                    className="bk-input-red-button"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {editOldBook && (
        <EditOldBookModal
          book={book}
          handleClose={handleEditOldBookModel}
          clicked={editOldBook}
        ></EditOldBookModal>
      )}
      {editImageBook && (
        <OldBookImageUpdateModal
          id={book?.id}
          handleClose={handleEditImageBookModel}
          clicked={editImageBook}
        ></OldBookImageUpdateModal>
      )}
      {deleteOldBook && (
        <DeleteOldBookModal
          book={book}
          handleClose={handleDeleteOldBookModel}
          clicked={deleteOldBook}
        ></DeleteOldBookModal>
      )}
    </div>
  );
};

export default OldBookDetails;

OldBookDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
