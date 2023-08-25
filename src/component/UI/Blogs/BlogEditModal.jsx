import UserInfo from "@/hook/userInfo";
import { useUpdateBlogMutation } from "@/redux/features/blog/blogApi";
import { Input, Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";

const { TextArea } = Input;

const BlogEditModal = ({ id, singleData, handleClose, clicked }) => {
  const { title, blog_part, img } = singleData;

  const image_hosting_token = process.env.NEXT_PUBLIC_IMAGE_UPLOAD_TOKEN;
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  //! User data
  const user = UserInfo();

  const [imageUpdate, setImageUpdate] = useState(img);
  const [blogDescription, setBlogDescription] = useState(blog_part);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  //! Edit blog :
  const [updateBlog] = useUpdateBlogMutation(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 100,
  });

  const onSubmit = async (data) => {
    try {
      //! image upload
      const formData = new FormData();
      formData.append("image", data?.img[0]);

      const imgResponse = await fetch(image_hosting_url, {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      if (imgResponse?.success) {
        setImageUpdate(imgResponse.data.display_url);
      } else {
        toast.error("Unable to upload image");
      }
      const blogData = {
        title: data.blog_header,
        img: imageUpdate,
        blog_part: blogDescription,
        email: user?.email,
        user_name: user?.lastName,
      };
      console.log("blogData", blogData);
      const response = await updateBlog({ id, blogData }).unwrap();
      console.log("response", response);

      if (response?.statusCode === 200) {
        toast.success(response?.message);
        handleClose();
      } else {
        toast.error(response?.error?.data?.message);
      }
      router.push(`/blogs/${id}`);
    } catch (error) {
      console.log("error", error);
    }
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
                  defaultValue={title}
                  type="text"
                  className="input-border-bottom w-full  mb-2"
                  {...register("blog_header")}
                />
              </div>
              <div>
                <h1 className="input-title-font">Image</h1>
                <input
                  // defaultValue={img}
                  type="file"
                  className="border w-full  mb-2"
                  {...register("img")}
                />
              </div>
            </div>
            <div>
              <h1 className="input-title-font">Your Blog</h1>
              <TextArea
                defaultValue={blog_part}
                onChange={(e) => setBlogDescription(e.target.value)}
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

export default BlogEditModal;
