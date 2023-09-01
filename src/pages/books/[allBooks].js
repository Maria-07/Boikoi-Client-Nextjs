import RegularBookCard from "@/component/UI/Books/RegularBooks/RegularBookCard";
import {
  useGetAllBooksQuery,
  useGetAllFilterableBooksQuery,
} from "@/redux/features/book/bookApi";
import CustomSearchOption from "@/shared/CustomSearchOption";
import { genreOptions } from "@/shared/constance";
import { Breadcrumb, Checkbox, Input, Pagination, Slider } from "antd";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsBook } from "react-icons/bs";

const { Search } = Input;

const AllBooks = () => {
  const currentRoute = usePathname();
  const [authorName, setAuthorName] = useState("");
  const [publisherName, setPublisherName] = useState("");
  const [genre, setGenre] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [facultyName, setFacultyName] = useState("");
  const [isSale, setIsSale] = useState(false);
  const [lastEdition, setLastEdition] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const [classLevelArray, setClassLevelArray] = useState([]);
  const [facultyNameArray, setFacultyNameArray] = useState([]);
  const [authorNameArray, setAuthorNameArray] = useState([]);
  const [publisherNameArray, setPublisherNameArray] = useState([]);
  const [lastEditionArray, setLastEditionArray] = useState([]);

  const onSearch = (value) => {
    // console.log("search:", value);
  };

  //   console.log("searchTerm", searchTerm);
  //   console.log(classLevelArray, "classLevelArray");

  //! get all Books
  const { data: allBooks, isLoading, isError } = useGetAllBooksQuery();

  useEffect(() => {
    console.log(allBooks);
    if (!isLoading && !isError && allBooks?.data) {
      const newClassLevelArray = allBooks.data.map((s) => s.class_level);
      setClassLevelArray(newClassLevelArray);

      const newFacultyNameArray = allBooks.data.map((s) => s.faculty_name);
      setFacultyNameArray(newFacultyNameArray);

      const newAuthorNameArray = allBooks.data.map((s) => s.author_name);
      setAuthorNameArray(newAuthorNameArray);

      const newPublisherNameArray = allBooks.data.map((s) => s.publisher_name);
      setPublisherNameArray(newPublisherNameArray);

      const newLastEditionArray = allBooks.data.map((s) => s.Last_edition);
      setLastEditionArray(newLastEditionArray);
    }
  }, [allBooks, isLoading, isError]);

  const onPriceChange = (value) => {
    console.log("onChange: ", value);
  };
  const onAfterPriceChange = (value) => {
    console.log("onAfterChange: ", value);
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  };

  //! get all filterable Books
  const {
    data: books,
    isLoading2,
    isError2,
  } = useGetAllFilterableBooksQuery(
    {
      authorName,
      publisherName,
      genre,
      classLevel,
      facultyName,
      isSale,
      lastEdition,
      searchTerm,
    },
    {
      refetchOnMountOrArgChange: true,
      pollingInterval: 5000,
    }
  );

  useEffect(() => {
    if (!isLoading2 && !isError2) {
      console.log("All Books:", books?.data);
      console.log("filterShops:", books);
    }
  }, [isLoading2, isError2, books]);

  return (
    <div>
      {" "}
      <div>
        <div className="my-profile-bg py-24">
          <h1 className="text-center text-xl font-secondary text-gray-200">
            Find Your Books
          </h1>
        </div>
        <div className="lg:w-[80%] lg:mx-auto py-4 px-4">
          <div className="my-5">
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
                  title: (
                    <button
                      className={
                        currentRoute === "/books"
                          ? "text-primary flex items-center gap-2 hover:text-primary font-semibold"
                          : "flex items-center gap-2 hover:text-primary font-semibold"
                      }
                    >
                      <BsBook className="  text-lg" />
                      <span>Books</span>
                    </button>
                  ),
                },
              ]}
            />
          </div>

          <div className="my-10">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  gap-5 ">
              <div className="border min-h-[100vh] shadow-md px-5 py-7">
                <div className="mb-5">
                  <h1 className="text-[15px] text-dark my-2 font-semibold">
                    Author Name
                  </h1>
                  <CustomSearchOption
                    item={authorNameArray}
                    option={setAuthorName}
                  ></CustomSearchOption>
                </div>
                <div className="mb-5">
                  <h1 className="text-[15px] text-dark my-2 font-semibold">
                    Publisher Name
                  </h1>
                  <CustomSearchOption
                    item={publisherNameArray}
                    option={setPublisherName}
                  ></CustomSearchOption>
                </div>
                <div className="mb-5">
                  <h1 className="text-[15px] text-dark my-2 font-semibold">
                    Genre
                  </h1>
                  <CustomSearchOption
                    item={genreOptions}
                    option={setGenre}
                  ></CustomSearchOption>
                </div>
                <div className="mb-5">
                  <h1 className="text-[15px] text-dark my-2 font-semibold">
                    Class Level
                  </h1>
                  <CustomSearchOption
                    item={classLevelArray}
                    option={setClassLevel}
                  ></CustomSearchOption>
                </div>
                <div className="mb-5">
                  <h1 className="text-[15px] text-dark my-2 font-semibold">
                    Faculty
                  </h1>
                  <CustomSearchOption
                    item={facultyNameArray}
                    option={setFacultyName}
                  ></CustomSearchOption>
                </div>
                <div className="mb-5">
                  <h1 className="text-[15px] text-dark my-2 font-semibold">
                    Last Edition
                  </h1>
                  <CustomSearchOption
                    item={lastEditionArray}
                    option={setLastEdition}
                  ></CustomSearchOption>
                </div>
                <div className="mb-5">
                  <h1 className="text-[15px] text-dark my-2 font-semibold">
                    Price Range
                  </h1>
                  <div className=" w-full py-[6px]  text-sm ">
                    {" "}
                    <Slider
                      range
                      step={10}
                      defaultValue={[minPrice, 500]}
                      onChange={onPriceChange}
                      onAfterChange={onAfterPriceChange}
                    />
                  </div>
                </div>
                {/* <div className="mb-5">
                  <h1 className="text-[15px] text-dark my-2 font-semibold">
                    Price Range
                  </h1>
                  <div className=" w-full py-[6px]  text-sm ">
                    <Checkbox.Group
                      options={plainOptions}
                      onChange={handleStock}
                    />
                  </div>
                </div> */}
              </div>
              <div className="md:col-span-4 border shadow-md px-3 py-5">
                <div>
                  <Search
                    placeholder="Search Book here"
                    onSearch={onSearch}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    // style={{
                    //   width: "100%",
                    // }}
                    className="md:w-[50%] mx-auto m-10 px-2"
                  />
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 ">
                  {books?.data?.map((book, i) => (
                    <RegularBookCard book={book} key={i}></RegularBookCard>
                  ))}
                </div>
                <div className="my-10 flex items-center justify-center">
                  <Pagination defaultCurrent={1} total={50} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
