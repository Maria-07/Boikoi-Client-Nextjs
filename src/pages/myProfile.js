/* eslint-disable react-hooks/rules-of-hooks */
import RootLayout from "@/component/Layouts/RootLayout";
import UserInfo from "@/hook/UserInfo";
import { Avatar } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEdit } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";

const myProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  //! User data
  const user = UserInfo();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Sign up data =", data);
  };

  return (
    <div className="min-h-screen">
      <div className="my-profile-bg py-24">
        <h1 className="text-center text-xl font-secondary text-gray-200">
          My Profile
        </h1>
      </div>
      <div className="sm:w-[60%] sm:mx-auto my-24 border py-10 sm:px-16 px-5 rounded-md shadow-md m-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-5 ">
            <Avatar icon={<BsPersonCircle className="text-3xl" />} />
            <div className="">
              <h1 className="text-xl font-primary text-primary">
                {user?.firstName} {user?.middleName} {user?.lastName}
              </h1>
              <h2 className="text-sm text-gray-500">{user?.role}</h2>
            </div>
          </div>
          <div>
            <AiOutlineEdit
              className="text-xl hover:text-primary text-dark"
              title="Edit Profile"
              onClick={() => setIsEdit(!isEdit)}
            />
          </div>
        </div>
        <hr className="my-10" />
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {" "}
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-3">
              <div>
                <h1 className="input-title">First Name</h1>
                <input
                  type="text"
                  disabled={!isEdit}
                  defaultValue={user?.firstName}
                  className="input-border w-full  mb-2"
                  {...register("firstName")}
                />
              </div>
              <div>
                <h1 className="input-title">Middle Name</h1>
                <input
                  type="text"
                  disabled={!isEdit}
                  defaultValue={user?.middleName}
                  className="input-border w-full  mb-2"
                  {...register("middleName")}
                />
              </div>
              <div>
                <h1 className="input-title">Last Name</h1>
                <input
                  type="text"
                  disabled={!isEdit}
                  defaultValue={user?.lastName}
                  className="input-border w-full  mb-2"
                  {...register("lastName")}
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-3">
              <div>
                <h1 className="input-title">Role</h1>

                <input
                  type="text"
                  disabled={true}
                  defaultValue={user?.role}
                  className="input-select-border w-full  mb-2"
                />
              </div>
              <div>
                <h1 className="input-title">Contact</h1>
                <input
                  type="text"
                  disabled={!isEdit}
                  defaultValue={user?.contact}
                  className="input-border w-full  mb-2"
                  {...register("contact")}
                />
              </div>
              <div>
                <h1 className="input-title">Email</h1>
                <input
                  type="email"
                  disabled={true}
                  defaultValue={user?.email}
                  className="input-border w-full  mb-2"
                />
                <label className="label">
                  <span className="text-sm">
                    {" "}
                    {errors.email?.type === "required" && (
                      <p className=" text-red-500">{errors.email.message}</p>
                    )}
                    {errors.email?.type === "pattern" && (
                      <p className=" text-red-500">{errors.email.message}</p>
                    )}
                  </span>
                </label>
              </div>
            </div>
            {isEdit && (
              <div className="flex items-center gap-3 justify-end">
                <button type="submit" className="input-button  my-5  ">
                  Submit
                </button>
                <button
                  onClick={() => setIsEdit(false)}
                  className="bk-modal-red-button  my-5  "
                >
                  Cancel
                </button>
              </div>
            )}
          </form>
        </div>

        <div className="my-16 text-sm font-semibold">
          {" "}
          <div className="my-2 flex items-center justify-between flex-wrap gap-2">
            <h1>Do you want to change your password ?</h1>
            <button className="input-button">Change Password</button>
          </div>
          <div className="my-5 flex items-center justify-between flex-wrap gap-2">
            <h1>Do you want to Delete your account ?</h1>
            <button className="bk-modal-red-button ">Delete my account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default myProfile;

myProfile.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
