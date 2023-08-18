/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import MyItemsLayout from "@/component/Layouts/MyItemsLayout";
import RootLayout from "@/component/Layouts/RootLayout";
import { useCreateShopMutation } from "@/redux/features/shop/shopApi";
import { Input, Upload } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Country, State, City } from "country-state-city";

const { TextArea } = Input;

const createShop = () => {
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

  const [error, setError] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const [createShop] = useCreateShopMutation();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const shopData = {
        shop_name: data.shop_name,
        shop_number: data.shop_number,
        contact_number: data.contact_number,
        image: image,
        location: data.location,
        address: {
          street: data.street,
          area: data.area,
          city: data.city,
        },
        shop_weekend: data.shop_weekend,
        shop_open_time: data.shop_open_time,
        shop_close_time: data.shop_open_time,
        book_shop_ratings: "4.5",
        description: description,
      };
      console.log("shopData", shopData);

      const response = await createShop(shopData).unwrap();
      console.log(response.message);
      console.log("respose", response);
      if (response.message) {
        toast.success(response?.message);
      }
    } catch (error) {
      // console.error(error?.data?.message);
      setError(error?.data?.message);
    }
  };

  const [country, setCountry] = useState("");

  const onCountryChange = (country) => {
    setCountry(country);
  };

  console.log("CountryStateCity");
  console.log(Country.getAllCountries());
  console.log(State.getAllStates());

  return (
    <div>
      <div>
        {/* <select onChange={onCountryChange}>
          {CountryStateCity.map((country) => (
            <option value={country}>{country}</option>
          ))}
        </select> */}
      </div>

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
          <h1 className="input-title-font">Description</h1>
          <TextArea
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            placeholder="About Your Shop"
          />
          {/* <Textarea
              type="time"
              className="input-border-bottom w-full  mb-2"
              {...register("shop_close_time")}
            /> */}
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
  );
};

export default createShop;

createShop.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <MyItemsLayout>{page}</MyItemsLayout>
    </RootLayout>
  );
};
