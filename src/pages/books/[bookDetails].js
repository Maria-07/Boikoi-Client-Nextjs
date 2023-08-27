/* eslint-disable react-hooks/rules-of-hooks */
import RootLayout from "@/component/Layouts/RootLayout";
import SimilarBooks from "@/component/UI/Books/BookDetails/SimilarBooks";
import { Breadcrumb, Image } from "antd";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { BiBookBookmark, BiBookOpen } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";

const bookDetails = () => {
  const currentRoute = usePathname();
  const book = {
    title: "To Kill a Mockingbird",
    image: "book_cover3.jpg",
    author_name: "Harper Lee",
    publisher_name: "J. B. Lippincott & Co.",
    genre: "Classic Literature",
    class_level: "High School",
    faculty_name: "Faculty of Language and Literature",
    quantity: 8,
    description:
      "A powerful novel dealing with racial injustice in the American South.",
    price: "17",
    is_sale: false,
    Last_edition: "2020",
    shop: "shop789",
    userEmail: "user3@example.com",
    reviews: ["Timeless masterpiece!", "Eye-opening and thought-provoking."],
  };
  return (
    <div>
      {" "}
      <div className="lg:w-[80%] lg:mx-auto py-4 my-10 px-4">
        <div className="mt-5 mb-10">
          {" "}
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
        <div className="flex items-center justify-center gap-10 lg:flex-nowrap flex-wrap my-16">
          <div>
            <Image
              src="https://ttpl.imgix.net/9789357780155_img.jpg"
              width={400}
              height={550}
              alt="Picture of the author"
              className="p-10 border "
            ></Image>
          </div>

          <div className="p-5">
            <div>
              <h1 className="text-2xl mb-3 font-secondary font-semibold text-secondary">
                {book?.title}
              </h1>
              <h2 className="text-[16px] font-medium text-primary">
                <span className="font-semibold"> Author :</span>{" "}
                {book?.author_name}
              </h2>
              <h3 className="text-[16px] font-medium text-primary">
                <span className="font-semibold"> Genre :</span> {book?.genre}
              </h3>
              <h4 className="text-[16px] font-medium text-primary">
                <span className="font-semibold"> Last Edition :</span>{" "}
                {book?.Last_edition}
              </h4>
            </div>
            <div>
              <p className="sm:w-[500px] my-10">
                <span className="font-semibold">Description : </span>
                Each inspirational book is jam-packed with rich content and
                positive information that will be a positive guiding light to
                your life, health, business, career, and relationships. It shows
                you how to get to the cause of all your stumbling blocks so that
                you are empowered to find solutions.
              </p>
            </div>

            <div className="my-10 flex items-center  gap-1">
              <button className="px-3 py-1 border border-gray-400  leading-7 shadow-md text-[15px] hover:bg-secondary hover:text-white rounded-md">
                Add to Favorite
              </button>
              {/* <Dropdown menu={{ items }}>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setWishButton(!wishButton);
                  }}
                >
                  <button title="Add To WishList">
                    {!wishButton ? (
                      <FaRegBookmark className="mt-[6px] text-[38px] text-[#804769] p-2 border border-[#804769] rounded-sm shadow-sm hover:bg-[#804769] hover:text-secondary" />
                    ) : (
                      <FaRegBookmark className="mt-[6px] text-[38px] text-[#fff] p-2 border border-[#804769] rounded-sm shadow-sm bg-[#804769] " />
                    )}
                  </button>
                </a>
              </Dropdown> */}
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

            <div>
              <div className="my-10 flex items-center  gap-4">
                <button
                  // onClick={handleUpdateBook}
                  className="bk-input-button"
                >
                  Edit BookShop
                </button>
                <button
                  // onClick={handleDeleteBook}
                  className="bk-input-red-button"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h1 className="text-base text-gray-600 font-semibold border-gray-200 pb-2 my-5">
            # Similar Books
          </h1>
          <SimilarBooks></SimilarBooks>
        </div>
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
        {deleteBook && (
          <DeleteBookModal
            id={id}
            handleClose={handleDeleteBook}
            clicked={deleteBook}
          ></DeleteBookModal>
        )}
        {updateBook && (
          <UpdateBook
            id={id}
            book={book}
            handleClose={handleUpdateBook}
            clicked={updateBook}
          ></UpdateBook>
        )} */}
      </div>
    </div>
  );
};

export default bookDetails;

bookDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
