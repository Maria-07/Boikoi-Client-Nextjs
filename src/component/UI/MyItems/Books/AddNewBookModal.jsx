import { Input, Modal } from "antd";
import { useForm } from "react-hook-form";
import { IoMdCloseCircleOutline } from "react-icons/io";
const { TextArea } = Input;

const AddNewBookModal = ({ handleClose, clicked }) => {
  //! hook onSubmit
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // const shopData = {
      //   shop_name: data.shop_name,
      //   shop_number: data.shop_number,
      //   contact_number: data.contact_number,
      //   location: data.location,
      //   address: {
      //     street: street,
      //     area: area,
      //     city: city,
      //   },
      //   shop_weekend: data.shop_weekend,
      //   shop_open_time: data.shop_open_time,
      //   shop_close_time: data.shop_close_time,
      //   book_shop_ratings: "4.5",
      //   description: description,
      //   bookShopOwner: user?.id,
      // };
      // const id = myShopData?.data?.id;
      // if (isLoading) {
      //   console.log("loading");
      // }
      // const response = await updateShop({ id, shopData }).unwrap();
      // console.log("response======", response);
      // if (response?.statusCode === 200) {
      //   toast.success(response?.message);
      //   handleClose();
      //   router.push("/myItems/shop");
      // } else {
      //   toast.error(response?.message);
      // }
    } catch (error) {
      // toast.error(error?.data?.message);
    }
  };
  return (
    <div>
      <Modal
        open={clicked}
        centered
        footer={null}
        bodyStyle={{ padding: "0" }}
        width={700}
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
            <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2  gap-5 my-5">
              {/*<div className="">
                <h1 className="input-title-font">
                  Shop Name <span className="text-red-600">*</span>
                </h1>
                <input
                  type="text"
                  className="input-border w-full  mb-2"
                  defaultValue={myShopData?.data?.shop_name}
                  {...register("shop_name", {
                    required: {
                      value: true,
                      message: "shop_name is required",
                    },
                  })}
                />
                <label className="label">
                  <span className="text-sm">
                    {" "}
                    {errors.shop_name?.type === "required" && (
                      <p className=" text-red-500">
                        {errors.shop_name.message}
                      </p>
                    )}
                    {errors.shop_name?.type === "pattern" && (
                      <p className=" text-red-500">
                        {errors.shop_name.message}
                      </p>
                    )}
                  </span>
                </label>
              </div>
              <div>
                <h1 className="input-title-font">Shop Number</h1>
                <input
                  type="text"
                  defaultValue={myShopData?.data?.shop_number}
                  className="input-border w-full  mb-2"
                  {...register("shop_number")}
                />
              </div>
              <div>
                <h1 className="input-title-font">Contact Number</h1>
                <input
                  type="number"
                  defaultValue={myShopData?.data?.contact_number}
                  className="input-border w-full  mb-2"
                  {...register("contact_number")}
                />
              </div>
              <div>
                <h1 className="input-title-font">Location</h1>
                <select
                  defaultValue={myShopData?.data?.location}
                  {...register("location")}
                  className="input-border-option w-full  mb-2"
                >
                  <option value=""></option>
                  <option value="Nilkhet Book Market">
                    Nilkhet Book Market
                  </option>
                  <option value="BanglaBazar Book Market">
                    BanglaBazar Book Market
                  </option>
                  <option value="Aziz Super Market">Aziz Super Market</option>
                  <option value="Rokomari Book Store">
                    Rokomari Book Store
                  </option>
                  <option value="Prothoma Prokashon Bookstores">
                    Prothoma Prokashon Bookstores
                  </option>
                  <option value="Pathak Shamabesh Center">
                    Pathak Shamabesh Center
                  </option>
                  <option value="Batighar">Batighar</option>
                  <option value="Jonaki Boi Ghar">Jonaki Boi Ghar</option>
                  <option value="Bookworm">Bookworm</option>
                  <option value="Bookshelf">Bookshelf</option>
                  <option value="Others">Others</option>
                </select>
              </div>
               <div>
                <h1 className="input-title-font">City</h1>
                <CustomDefaultOptionAntd
                  dValue={myShopData?.data?.address?.city}
                  item={cityArray}
                  option={setCity}
                ></CustomDefaultOptionAntd>
              </div>
              <div>
                <h1 className="input-title-font">Area</h1>
                <CustomDefaultOptionAntd
                  dValue={myShopData?.data?.address?.area}
                  item={areaArray}
                  option={setArea}
                ></CustomDefaultOptionAntd>
              </div>
              <div>
                <h1 className="input-title-font">Street</h1>
                <CustomDefaultOptionAntd
                  dValue={myShopData?.data?.address?.street}
                  item={streetArray}
                  option={setStreet}
                ></CustomDefaultOptionAntd>
              </div> 
              <div>
                <h1 className="input-title-font">Shop Weekend</h1>
                <select
                  defaultValue={myShopData?.data?.shop_weekend}
                  {...register("shop_weekend")}
                  className="input-border-option w-full  mb-2"
                >
                  <option value=""></option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday-Sunday">Saturday-Sunday</option>
                  <option value="Sunday-Monday">Sunday-Monday</option>
                </select>
              </div>
              <div>
                <h1 className="input-title-font">Shop Open Time</h1>
                <input
                  defaultValue={myShopData?.data?.shop_open_time}
                  type="time"
                  className="input-border w-full  mb-2"
                  {...register("shop_open_time")}
                />
              </div>
              <div>
                <h1 className="input-title-font">Shop CLose Time</h1>
                <input
                  defaultValue={myShopData?.data?.shop_close_time}
                  type="time"
                  className="input-border w-full  mb-2"
                  {...register("shop_close_time")}
                />
              </div>
              <div className="sm:col-span-2">
                <h1 className="input-title-font">Description</h1>
                <TextArea
                  defaultValue={myShopData?.data?.description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={8}
                  placeholder="About Your Shop"
                />
              </div>*/}
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
