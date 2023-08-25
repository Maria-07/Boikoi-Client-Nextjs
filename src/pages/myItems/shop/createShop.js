/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import MyItemsLayout from "@/component/Layouts/MyItemsLayout";
import RootLayout from "@/component/Layouts/RootLayout";
import {
  useCreateShopMutation,
  useGetShopAddressQuery,
} from "@/redux/features/shop/shopApi";
import { Input, Upload } from "antd";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import CustomOptionAntd from "@/shared/CustomOptionAntd";
import UserInfo from "@/hook/UserInfo";
import { useRouter } from "next/router";

const { TextArea } = Input;

const createShop = () => {
  const [street, setStreet] = useState();
  const [area, setArea] = useState();
  const [city, setCity] = useState();

  const [streetArray, setStreetArray] = useState([]);
  const [areaArray, setAreaArray] = useState([]);
  const [cityArray, setCityArray] = useState([]);

  //! get all Shop Address
  const { data: shopAddress, isLoading, isError } = useGetShopAddressQuery();

  useEffect(() => {
    if (!isLoading && !isError && shopAddress?.data) {
      // console.log("Shop Address:", shopAddress.data);
      const newStreetArray = shopAddress.data.map((s) => s.address.street);
      setStreetArray(newStreetArray);
      // console.log("newStreetArray", newStreetArray);

      const newAreaArray = shopAddress.data.map((s) => s.address.area);
      setAreaArray(newAreaArray);
      const newCityArray = shopAddress.data.map((s) => s.address.city);
      setCityArray(newCityArray);
    }
  }, [shopAddress, isLoading, isError]);

  //! image upload
  const image_hosting_token = process.env.NEXT_PUBLIC_IMAGE_UPLOAD_TOKEN;
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [description, setDescription] = useState("");

  //! User data
  const user = UserInfo();
  // console.log(user);

  const router = useRouter();

  //! Post Your Shop :
  const [createShop] = useCreateShopMutation(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 100,
  });

  const onSubmit = async (data) => {
    // console.log(data);
    try {
      //! image upload
      const formData = new FormData();
      formData.append("image", data?.image[0]);

      const imgResponse = await fetch(image_hosting_url, {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      console.log("imgResponse", imgResponse);

      if (imgResponse?.success) {
        const shopData = {
          shop_name: data.shop_name,
          shop_number: data.shop_number,
          contact_number: data.contact_number,
          image: imgResponse.data.display_url,
          location: data.location,
          address: {
            street: street,
            area: area,
            city: city,
          },
          shop_weekend: data.shop_weekend,
          shop_open_time: data.shop_open_time,
          shop_close_time: data.shop_close_time,
          book_shop_ratings: "4.5",
          description: description,
          bookShopOwner: user?.id,
        };
        // console.log("shopData", shopData);

        const response = await createShop(shopData).unwrap();
        // console.log("response======", response);
        console.log("response", response);
        if (response?.statusCode === 200) {
          toast.success(response?.message);
          router.push("/myItems/shop");
        } else {
          toast.error(response?.message);
        }
      } else {
        toast.error("Unable to upload image");
      }
    } catch (error) {
      // console.error(error?.data?.message);
      toast.error(error?.data?.message);
      console.log(error?.data?.message);
    }
  };

  return (
    <div>
      <h1 className="text-primary text-lg font-semibold mt-3">
        Create Your Shop
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 my-5">
          {" "}
          <div className="">
            <h1 className="input-title-font">
              Shop Name <span className="text-red-600">*</span>
            </h1>
            <input
              type="text"
              className="input-border w-full  mb-2"
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
              className="input-border w-full  mb-2"
              {...register("shop_number")}
            />
          </div>
          <div>
            <h1 className="input-title-font">Contact Number</h1>
            <input
              type="number"
              className="input-border w-full  mb-2"
              {...register("contact_number")}
            />
          </div>
          <div>
            <h1 className="input-title-font">Location</h1>
            <select
              {...register("location")}
              className="input-border-option w-full  mb-2"
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
            <CustomOptionAntd
              item={cityArray}
              option={setCity}
            ></CustomOptionAntd>
          </div>
          <div>
            <h1 className="input-title-font">Area</h1>
            <CustomOptionAntd
              item={areaArray}
              option={setArea}
            ></CustomOptionAntd>
          </div>
          <div>
            <h1 className="input-title-font">Street</h1>
            <CustomOptionAntd
              item={streetArray}
              option={setStreet}
            ></CustomOptionAntd>
          </div>
          <div>
            <h1 className="input-title-font">Shop Weekend</h1>
            <select
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
              type="time"
              className="input-border w-full  mb-2"
              {...register("shop_open_time")}
            />
          </div>
          <div>
            <h1 className="input-title-font">Shop CLose Time</h1>
            <input
              type="time"
              className="input-border w-full  mb-2"
              {...register("shop_close_time")}
            />
          </div>
        </div>
        <div>
          <h1 className="input-title-font">real</h1>
          <input
            type="file"
            className="border w-full  mb-2"
            {...register("image")}
          />
        </div>
        <div>
          <h1 className="input-title-font">Description</h1>
          <TextArea
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            placeholder="About Your Shop"
          />
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
