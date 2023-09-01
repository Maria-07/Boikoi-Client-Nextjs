import { useUpdateBlogMutation } from "@/redux/features/blog/blogApi";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";

const BlogImageUpdateModal = ({ id, handleClose, clicked }) => {
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

  const image_hosting_token = process.env.NEXT_PUBLIC_IMAGE_UPLOAD_TOKEN;
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

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
        if (imgResponse.data.display_url) {
          const blogData = {
            img: imgResponse.data.display_url,
          };

          const response = await updateBlog({ id, blogData }).unwrap();
          console.log("response", response);

          if (response?.statusCode === 200) {
            toast.success(response?.message);
            handleClose();
            router.push(`/blogs/${id}`);
          } else {
            toast.error(response?.error?.data?.message);
          }
        }
      } else {
        toast.error("Unable to upload image");
      }
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
              Update Image
            </h1>

            <IoMdCloseCircleOutline
              onClick={handleClose}
              className="text-gray-500 text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" my-5">
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

            <div className="flex items-end justify-end">
              <button type="submit" className="bk-input-button my-5  ">
                Update Image
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default BlogImageUpdateModal;
