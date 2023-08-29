/* eslint-disable react-hooks/rules-of-hooks */
import RootLayout from "@/component/Layouts/RootLayout";
import ShopDetails from "@/component/UI/Books/BookDetails/ShopDetails";
import SimilarBooks from "@/component/UI/Books/BookDetails/SimilarBooks";
import DeleteBookModal from "@/component/UI/MyItems/Books/DeleteBookModal";
import EditBookModal from "@/component/UI/MyItems/Books/EditBookModal";
import UserInfo from "@/hook/UserInfo";
import { useGetSingleBookQuery } from "@/redux/features/book/bookApi";
import { Breadcrumb, Image } from "antd";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiBookBookmark, BiBookOpen } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";

const bookDetails = () => {
  const currentRoute = usePathname();

  //! User data
  const user = UserInfo();

  const [editBook, setEditBook] = useState(false);
  const [deleteBook, setDeleteBook] = useState(false);

  const handleEditBookModel = () => {
    setEditBook(!editBook);
  };
  const handleDeleteBookModel = () => {
    setDeleteBook(!deleteBook);
  };

  //! param from query
  const router = useRouter();
  const { query } = router;
  const id = query.bookDetails;
  // console.log(id);

  //! Single Book details :
  const {
    data: bookData,
    isLoading,
    isError,
  } = useGetSingleBookQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 5000,
  });

  useEffect(() => {
    if (!isLoading && !isError) {
      console.log("My Book Data:", bookData);
    }
  }, [bookData, isLoading, isError, id]);

  const book = bookData?.data;
  return (
    <div>
      <div className="lg:w-[80%] lg:mx-auto py-4 my-10 px-4">
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
                href: "/books",
                title: (
                  <button
                    className={
                      currentRoute === "/books"
                        ? "text-primary flex items-center gap-2 hover:text-primary font-semibold"
                        : "flex items-center gap-2 hover:text-primary font-semibold"
                    }
                  >
                    <BiBookOpen className="  text-lg" />
                    <span>Books</span>
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
            <Image
              src={book?.image}
              width={400}
              height={550}
              alt="Picture of the author"
              className="p-10 border "
            ></Image>
          </div>

          <div className="px-5">
            <div>
              <h1 className="text-2xl mb-3 font-secondary font-semibold text-secondary">
                {book?.title}
              </h1>
              <h2 className="text-[16px] font-medium text-primary">
                <span className="font-semibold text-secondary"> Author :</span>{" "}
                {book?.author_name}
              </h2>
              <h2 className="text-[16px] font-medium text-primary">
                <span className="font-semibold text-secondary">
                  {" "}
                  Publisher Name :
                </span>{" "}
                {book?.publisher_name}
              </h2>
            </div>
            <div>
              <table className="min-w-full border-[1px] border-gray-200 my-8 overflow-x-scroll">
                <tbody>
                  <tr className="border-b border-[1px] border-gray-500 ">
                    <td className="text-sm font-semibold text-dark  bg-gray-100 px-2 py-3 whitespace-nowrap border-r border-gray-200 border-[1px] border-b-gray-200">
                      Genre
                    </td>
                    <td className="text-sm  font-light px-2 py-3 whitespace-nowrap border border-gray-200 border-1">
                      {book?.genre}
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
                      Quantity
                    </td>
                    <td className="text-sm  font-light px-2 py-3 whitespace-nowrap border border-gray-200 border-1">
                      {book?.quantity}
                    </td>
                  </tr>
                  <tr className="border-b border-[1px] border-gray-500 ">
                    <td className="text-sm font-semibold text-dark  bg-gray-100 px-2 py-3 whitespace-nowrap border-r border-gray-200 border-[1px] border-b-gray-200">
                      Price
                    </td>
                    <td className="text-sm text-primary  font-semibold px-2 py-3 whitespace-nowrap border border-gray-200 border-1">
                      {book?.price}
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

            {user?.email === book?.userEmail && (
              <div>
                <div className="mt-10 mb-5 flex items-center  gap-4">
                  <button
                    onClick={handleEditBookModel}
                    className="bk-input-button"
                  >
                    Edit BookShop
                  </button>
                  <button
                    onClick={handleDeleteBookModel}
                    className="bk-input-red-button"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <h1 className="text-base text-gray-600 font-semibold border-gray-200 pb-1">
            # Shop Details
          </h1>
          <hr />
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 my-5">
          <div className="sm:col-span-2">
            <ShopDetails id={book?.shop?.id}></ShopDetails>
          </div>
        </div>
        {/* <div>
          <h1 className="text-base text-gray-600 font-semibold border-gray-200 pb-2 my-5">
            # Similar Books
          </h1>
          <SimilarBooks></SimilarBooks>
        </div> */}
        {/* review part  */}
        {/* <div className="view-part mx-auto">
          <div className="my-10 p-4">
            <Tabs
              type="card"
              items={new Array(1).fill(null).map((_, i) => {
                const id = String(i + 1);
                return {
                  label: (
                    <p key={i} className="text-lg text-primary">
                      Review
                    </p>
                  ),
                  key: id,
                  children: (
                    <div>
                      <form onSubmit={handleSubmit}>
                        <div className="my-16 ">
                          <TextArea
                            className="min-h-[30px] w-1/2"
                            rows={4}
                            placeholder="maxLength is 6"
                            onChange={handleChange}
                            value={inputValue}
                          />
                          <br />
                          <button className="px-3 my-3 py-1 border rounded-sm leading-7 text-[15px] bg-popover shadow-md hover:bg-[#804769] text-secondary">
                            Submit
                          </button>
                        </div>
                      </form>

                      {reviews.map(
                        (review: string, index: number) => (
                          <>
                            {" "}
                            <div
                              key={index}
                              className=" flex items-center flex-wrap gap-5"
                            >
                              <Avatar
                                icon={<BsPersonCircle className="text-3xl" />}
                              />
                              <div className="text-base">
                                <p>{review}</p>
                              </div>
                            </div>
                            <hr className="my-3" />
                          </>
                        )
                      )}
                    </div>
                  ),
                };
              })}
            />
          </div>
        </div>
         */}
      </div>
      {editBook && (
        <EditBookModal
          book={book}
          handleClose={handleEditBookModel}
          clicked={editBook}
        ></EditBookModal>
      )}
      {deleteBook && (
        <DeleteBookModal
          book={book}
          handleClose={handleDeleteBookModel}
          clicked={deleteBook}
        ></DeleteBookModal>
      )}
    </div>
  );
};

export default bookDetails;

bookDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};