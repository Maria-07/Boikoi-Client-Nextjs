import { useGetProfileQuery } from "@/redux/features/auth/userApi";
import { Input, Modal } from "antd";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoMdCloseCircleOutline } from "react-icons/io";

const { TextArea } = Input;

const PostBlogModel = ({ handleClose, clicked }) => {
  const { data: userProfile, isLoading, isError } = useGetProfileQuery();

  useEffect(() => {
    if (!isLoading && !isError) {
      console.log("User Profile:", userProfile?.data);
    }
  }, [userProfile, isLoading, isError]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div>
      {" "}
      <Modal
        open={clicked}
        centered
        footer={null}
        bodyStyle={{ padding: "0" }}
        width={500}
        closable={false}
        className="box"
      >
        <div className="">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold tracking-tight">
              Post Your Blogs
            </h1>

            <IoMdCloseCircleOutline
              onClick={handleClose}
              className="text-gray-500 text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1  gap-5 my-5">
              {" "}
              <div>
                <h1 className="input-title-font">Blog&apos;s Header</h1>
                <input
                  type="text"
                  className="input-border-bottom w-full  mb-2"
                  {...register("blog_header")}
                />
              </div>
              <div>
                <h1 className="input-title-font">Image</h1>
                <input
                  type="file"
                  className="border w-full  mb-2"
                  {...register("img")}
                />
              </div>
            </div>
            <div>
              <h1 className="input-title-font">Your Blog</h1>
              <TextArea
                onChange={(e) => setDescription(e.target.value)}
                rows={14}
                placeholder="About Your Shop"
              />
            </div>

            <button type="submit" className="bk-input-button my-5  ">
              Post Your Blog
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default PostBlogModel;
