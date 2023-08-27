import { useCreateBookMutation } from "@/redux/features/book/bookApi";
import { useGetMyShopQuery } from "@/redux/features/shop/shopApi";
import CustomSearchOption from "@/shared/CustomSearchOption";
import { Input, Modal } from "antd";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";
const { TextArea } = Input;

const AddNewBookModal = ({ handleClose, clicked }) => {
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [faculty, setFaculty] = useState("");

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

  //! get My Shop
  const {
    data: myShopData,
    isLoading,
    isError,
  } = useGetMyShopQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 5000,
  });

  useEffect(() => {
    if (!isLoading && !isError) {
      // console.log("My Shop Data:", myShopData?.data?.id);
    }
  }, [myShopData, isLoading, isError]);

  //! Post Your Book :
  const [createBook] = useCreateBookMutation(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 100,
  });

  //! hook onSubmit
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //! image upload
  const image_hosting_token = process.env.NEXT_PUBLIC_IMAGE_UPLOAD_TOKEN;
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const onSubmit = async (data) => {
    console.log(data);
    try {
      // //! image upload
      const formData = new FormData();
      formData.append("image", data?.image[0]);
      const imgResponse = await fetch(image_hosting_url, {
        method: "POST",
        body: formData,
      }).then((res) => res.json());
      console.log("imgResponse", imgResponse);
      if (imgResponse?.success) {
        const bookData = {
          title: data.title,
          author_name: data.author_name,
          publisher_name: data.publisher_name,
          image: imgResponse.data.display_url,
          genre: genre,
          class_level: classLevel,
          faculty_name: faculty,
          quantity: data.quantity,
          price: data.price,
          Last_edition: data.Last_edition,
          description: description,
          shop: myShopData?.data?.id,
        };
        console.log("Book Data", bookData);
        const response = await createBook(bookData).unwrap();
        // console.log("response======", response);
        console.log("response", response);
        if (response?.statusCode === 200) {
          toast.success(response?.message);
          handleClose();
          router.push("/myItems/book");
        } else {
          toast.error(response?.message);
        }
      } else {
        toast.error("Unable to upload image");
      }
    } catch (error) {
      // console.error(error?.data?.message);
      toast.error(error?.data?.message);
      // console.log(error?.data?.message);
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
              Add New Book
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
                  className="input-border w-full  mb-2"
                  {...register("author_name")}
                />
              </div>
              <div>
                <h1 className="input-title-font">Publisher Name</h1>
                <input
                  type="text"
                  className="input-border w-full  mb-2"
                  {...register("publisher_name")}
                />
              </div>
              <div>
                <h1 className="input-title-font">Genre</h1>
                <CustomSearchOption
                  item={genreOptions}
                  option={setGenre}
                ></CustomSearchOption>
              </div>
              <div>
                <h1 className="input-title-font">Last Edition</h1>
                <input
                  type="text"
                  className="input-border w-full  mb-2"
                  {...register("Last_edition")}
                />
              </div>
              <div className="md:col-span-2">
                <h1 className="input-title-font">Class Level</h1>
                <CustomSearchOption
                  item={educationLevels}
                  option={setClassLevel}
                ></CustomSearchOption>
              </div>
              <div>
                <h1 className="input-title-font">Price</h1>
                <input
                  type="text"
                  className="input-border w-full  mb-2"
                  {...register("price")}
                />
              </div>
              <div className="md:col-span-2">
                <h1 className="input-title-font">Faculty</h1>
                <CustomSearchOption
                  item={facultiesList}
                  option={setFaculty}
                ></CustomSearchOption>
              </div>
              <div>
                <h1 className="input-title-font">Quantity</h1>
                <input
                  type="text"
                  className="input-border w-full  mb-2"
                  {...register("quantity")}
                />
              </div>

              <div>
                <h1 className="input-title-font">Book Image</h1>
                <input
                  type="file"
                  className="border w-full  mb-2"
                  {...register("image")}
                />
              </div>

              <div className="sm:col-span-3">
                <h1 className="input-title-font">Description</h1>
                <TextArea
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  placeholder="About This Book"
                />
              </div>
            </div>
            <div className="bg-gray-200 py-[1px] my-3"></div>

            <div className="flex gap-3 items-end justify-end mb-2 mt-4">
              <button type="submit" className="bk-input-button  ">
                Add new Book
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

export default AddNewBookModal;
