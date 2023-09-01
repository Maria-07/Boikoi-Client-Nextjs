import { useUpdateBookMutation } from "@/redux/features/book/bookApi";
import CustomDefaultSearchOption from "@/shared/CustomDefaultSearchOption";
import { Input, Modal } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";

const { TextArea } = Input;

const EditBookModal = ({ book, handleClose, clicked }) => {
  const [description, setDescription] = useState(book.description);
  const [genre, setGenre] = useState(book.genre);
  const [classLevel, setClassLevel] = useState(book.class_level);
  const [faculty, setFaculty] = useState(book.faculty_name);

  const genreOptions = [
    "Others",
    "Literary Fiction",
    "Historical Fiction",
    "Mystery/Thriller/Crime",
    "Science Fiction (Sci-Fi)",
    "Fantasy",
    "Horror",
    "Romance",
    "Adventure",
    "Biography/Autobiography/Memoir",
    "Self-Help/Personal Development",
    "Psychology",
    "Philosophy",
    "History",
    "Science/Nature",
    "Travel",
    "Cooking/Food",
    "Health/Fitness",
    "True Crime",
    "Picture Books",
    "Early Readers",
    "Middle Grade",
    "Young Adult (YA)",
    "Children's Fantasy",
    "Children's Science Fiction",
    "Children's Mystery",
    "Poetry",
    "Drama/Play",
    "Classic Literature",
    "Religious/Spiritual",
    "Science and Technology",
    "Art/Photography",
    "Music",
    "Comics/Graphic Novels",
    "Humor",
    "Sports and Recreation",
    "Politics/Current Affairs",
    "Philosophy",
    "Psychology",
    "Business/Economics",
    "Education",
    "Environment/Ecology",
    "Mythology/Folklore",
    "Short Stories/Anthologies",
    "Essays",
    "Travelogue",
    "Health and Wellness",
    "Cultural Studies",
    "Reference Books",
    "Academic/Textbooks",
    "Romance (Various Sub-Genres)",
    "Mystery/Thriller/Crime (Various Sub-Genres)",
    "Science Fiction (Various Sub-Genres)",
  ];

  const educationLevels = [
    "Others",
    "Nursery",
    "Kindergarten (KG)",
    "Playgroup",
    "Pre-Primary",
    "Primary School (Class 1 to 5)",
    "Lower Primary (Class 1 to 3)",
    "Upper Primary (Class 4 to 5)",
    "Lower Secondary School (Class 6 to 8)",
    "Secondary School (Class 9 to 10)",
    "Higher Secondary School (Class 11 to 12)",
    "College (Higher Secondary Education)",
    "Degree College (Bachelor's Degree)",
    "University (Undergraduate and Graduate Levels)",
    "Master's Degree",
    "Doctorate (Ph.D.)",
    "Technical and Vocational Institutes",
  ];

  const facultiesList = [
    "Others",
    "Faculty of Science",
    "Faculty of Arts",
    "Faculty of Social Sciences",
    "Faculty of Business Administration (BBA)",
    "Faculty of Engineering",
    "Faculty of Medicine",
    "Faculty of Law",
    "Faculty of Agriculture",
    "Faculty of Education",
    "Faculty of Fine Arts",
    "Faculty of Environmental Science",
    "Faculty of Architecture and Planning",
    "Faculty of Pharmacy",
    "Faculty of Nursing",
    "Faculty of Information Technology (IT)",
    "Faculty of Economics",
    "Faculty of Language and Literature",
    "Faculty of Commerce",
    "Faculty of Media and Communication",
    "Faculty of Public Health",
    "Faculty of Psychology",
    "Faculty of Physical Education",
    "Faculty of Islamic Studies",
    "Faculty of Business and Economics",
    "Faculty of Computer Science and Engineering",
    "Faculty of Applied Sciences",
    "Faculty of Biochemistry and Molecular Biology",
    "Faculty of Biotechnology",
    "Faculty of Civil Engineering",
    "Faculty of Electrical and Electronic Engineering",
    "Faculty of Mechanical Engineering",
    "Faculty of Architecture and Interior Design",
    "Faculty of Urban and Regional Planning",
    "Faculty of Geography and Environmental Studies",
    "Faculty of Mathematics",
    "Faculty of Statistics",
    "Faculty of Chemistry",
    "Faculty of Physics",
    "Faculty of Geology",
    "Faculty of Materials Science and Engineering",
    "Faculty of Language Studies",
    "Faculty of Journalism and Mass Communication",
    "Faculty of International Relations",
    "Faculty of Development Studies",
    "Faculty of Gender Studies",
    "Faculty of Disaster Management",
    "Faculty of Nutrition and Food Science",
    "Faculty of Sports Science",
    "Faculty of Microbiology",
    "Faculty of Public Administration",
    "Faculty of Anthropology",
    "Faculty of Linguistics",
    "Others",
  ];

  //! Update Book :
  const [updateBook, { isLoading }] = useUpdateBookMutation(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 100,
  });

  //! hook onSubmit
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const bookData = {
        title: data.title,
        author_name: data.author_name,
        publisher_name: data.publisher_name,
        genre: genre,
        class_level: classLevel,
        faculty_name: faculty,
        quantity: data.quantity,
        price: data.price,
        Last_edition: data.Last_edition,
        description: description,
      };
      console.log("bookData", bookData);
      const id = book.id;

      if (isLoading) {
        console.log("loading");
      }

      const response = await updateBook({ id, bookData }).unwrap();
      console.log("response======", response);

      if (response?.statusCode === 200) {
        toast.success(response?.message);
        handleClose();
        router.push(`/books/bookDetails/${id}`);
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };
  return (
    <div>
      <Modal
        open={clicked}
        centered
        footer={null}
        bodyStyle={{ padding: "0" }}
        width={600}
        closable={false}
        className="box"
      >
        <div className="">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold tracking-tight">
              Edit Book
              <span className="text-primary">
                {/* {myShopData?.data?.shop_name} */}
              </span>
            </h1>

            <IoMdCloseCircleOutline
              onClick={handleClose}
              className="text-gray-500 text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 my-5">
              <div className="md:col-span-2">
                <h1 className="input-title-font">
                  Book Name <span className="text-red-600">*</span>
                </h1>
                <input
                  type="text"
                  defaultValue={book?.title}
                  className="input-border w-full  mb-2"
                  {...register("title", {
                    required: {
                      value: true,
                      message: "title is required",
                    },
                  })}
                />
              </div>
              <div>
                <h1 className="input-title-font">Author Name</h1>
                <input
                  type="text"
                  defaultValue={book?.author_name}
                  className="input-border w-full  mb-2"
                  {...register("author_name")}
                />
              </div>
              <div>
                <h1 className="input-title-font">Publisher Name</h1>
                <input
                  type="text"
                  defaultValue={book?.publisher_name}
                  className="input-border w-full  mb-2"
                  {...register("publisher_name")}
                />
              </div>
              <div>
                <h1 className="input-title-font">Genre</h1>
                <CustomDefaultSearchOption
                  dValue={book.genre}
                  item={genreOptions}
                  option={setGenre}
                ></CustomDefaultSearchOption>
              </div>
              <div>
                <h1 className="input-title-font">Last Edition</h1>
                <input
                  type="text"
                  defaultValue={book?.Last_edition}
                  className="input-border w-full  mb-2"
                  {...register("Last_edition")}
                />
              </div>
              <div className="md:col-span-2">
                <h1 className="input-title-font">Class Level</h1>
                <CustomDefaultSearchOption
                  dValue={book.class_level}
                  item={educationLevels}
                  option={setClassLevel}
                ></CustomDefaultSearchOption>
              </div>
              <div>
                <h1 className="input-title-font">Price</h1>
                <input
                  type="number"
                  defaultValue={book?.price}
                  className="input-border w-full  mb-2"
                  {...register("price")}
                />
              </div>
              <div className="md:col-span-2">
                <h1 className="input-title-font">Faculty</h1>
                <CustomDefaultSearchOption
                  dValue={book.faculty_name}
                  item={facultiesList}
                  option={setFaculty}
                ></CustomDefaultSearchOption>
              </div>
              <div>
                <h1 className="input-title-font">Quantity</h1>
                <input
                  type="text"
                  defaultValue={book?.quantity}
                  className="input-border w-full  mb-2"
                  {...register("quantity")}
                />
              </div>

              <div className="sm:col-span-3">
                <h1 className="input-title-font">Description</h1>
                <TextArea
                  defaultValue={book.description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  placeholder="About This Book"
                />
              </div>
            </div>
            <div className="bg-gray-200 py-[1px] my-3"></div>

            <div className="flex gap-3 items-end justify-end mb-2 mt-4">
              <button type="submit" className="bk-input-button  ">
                Edit Book
              </button>
              <button onClick={handleClose} className="bk-modal-red-button ">
                Close
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EditBookModal;
