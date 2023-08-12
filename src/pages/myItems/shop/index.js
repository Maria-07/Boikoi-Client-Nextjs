import MyItemsLayout from "@/component/Layouts/MyItemsLayout";
import RootLayout from "@/component/Layouts/RootLayout";
import Link from "next/link";
import { Upload } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";

const MyShop = () => {
  const [fileList, setFileList] = useState();
  console.log(fileList);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="flex items-end justify-end">
        <Link href={"/myItems/shop/createShop"}>
          {" "}
          <button>Create a shop</button>
        </Link>
      </div>

      <div>
        <h1 className="text-primary text-lg font-semibold">Create Your Shop</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 my-5">
            {" "}
            <div className="">
              <h1 className="input-title-font">
                Shop Name <span className="text-red-600">*</span>
              </h1>
              <input
                type="text"
                className="input-border-bottom w-full  mb-2"
                {...register("shop_name", {
                  required: {
                    value: true,
                    message: "shop_name is required",
                  },
                  pattern: {
                    value: /@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                    message: "Provide a valid shop_name", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className="label">
                <span className="text-sm">
                  {" "}
                  {errors.shop_name?.type === "required" && (
                    <p className=" text-red-500">{errors.shop_name.message}</p>
                  )}
                  {errors.shop_name?.type === "pattern" && (
                    <p className=" text-red-500">{errors.shop_name.message}</p>
                  )}
                </span>
              </label>
            </div>
            <div>
              <h1 className="input-title-font">Shop Number</h1>
              <input
                type="text"
                className="input-border-bottom w-full  mb-2"
                {...register("shop_number")}
              />
            </div>
            <div>
              <h1 className="input-title-font">Contact Number</h1>
              <input
                type="number"
                className="input-border-bottom w-full  mb-2"
                {...register("contact_number")}
              />
            </div>
            <div>
              <h1 className="input-title-font">Location</h1>
              <select
                {...register("location")}
                className="input-border-bottom w-full py-1 my-1 mb-2"
              >
                <option value=""></option>
                <option value="Nilkhet Book Market">Nilkhet Book Market</option>
                <option value="BanglaBazar Book Market">
                  BanglaBazar Book Market
                </option>
                <option value="Aziz Super Market">Aziz Super Market</option>
                <option value="Rokomari Book Store">Rokomari Book Store</option>
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
              <h1 className="input-title-font">Street</h1>
              <select
                {...register("street")}
                className="input-border-bottom w-full py-1 my-1 mb-2"
              >
                <option value=""></option>
                <option value="Nilkhet Book Market">Nilkhet Book Market</option>
                <option value="BanglaBazar Book Market">
                  BanglaBazar Book Market
                </option>
                <option value="Aziz Super Market">Aziz Super Market</option>
                <option value="Rokomari Book Store">Rokomari Book Store</option>
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
              <h1 className="input-title-font">Area</h1>
              <select
                {...register("area")}
                className="input-border-bottom w-full py-1 my-1 mb-2"
              >
                <option value=""></option>
                <option value="Nilkhet Book Market">Nilkhet Book Market</option>
                <option value="BanglaBazar Book Market">
                  BanglaBazar Book Market
                </option>
                <option value="Aziz Super Market">Aziz Super Market</option>
                <option value="Rokomari Book Store">Rokomari Book Store</option>
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
              <select
                {...register("city")}
                className="input-border-bottom w-full py-1 my-1 mb-2"
              >
                <option value=""></option>
                <option value="Nilkhet Book Market">Nilkhet Book Market</option>
                <option value="BanglaBazar Book Market">
                  BanglaBazar Book Market
                </option>
                <option value="Aziz Super Market">Aziz Super Market</option>
                <option value="Rokomari Book Store">Rokomari Book Store</option>
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
              <h1 className="input-title-font">Shop Weekend</h1>
              <select
                {...register("shop_weekend")}
                className="input-border-bottom w-full py-1 my-1 mb-2"
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
                type="time"
                className="input-border-bottom w-full  mb-2"
                {...register("shop_open_time")}
              />
            </div>
            <div>
              <h1 className="input-title-font">Shop CLose Time</h1>
              <input
                type="time"
                className="input-border-bottom w-full  mb-2"
                {...register("shop_close_time")}
              />
            </div>
          </div>
          <div>
            <h1 className="input-title-font">Shop Image</h1>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              onChange={onChange}
              onPreview={onPreview}
            >
              {"+ Upload"}
            </Upload>
          </div>
          <button type="submit" className="bk-input-button my-5  ">
            Create Shop
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyShop;

MyShop.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <MyItemsLayout>{page}</MyItemsLayout>
    </RootLayout>
  );
};
