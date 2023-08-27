import { useDeleteBlogMutation } from "@/redux/features/blog/blogApi";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";

const BlogDeleteModal = ({ id, title, handleClose, clicked }) => {
  const router = useRouter();

  //! Delete blog :
  const [deleteBlog, { isLoading }] = useDeleteBlogMutation(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 100,
  });

  const handleDelete = async () => {
    console.log("delete");
    try {
      console.log("id", id);

      const response = await deleteBlog({ id });
      if (isLoading) {
        console.log("loading");
      }
      console.log("response", response);
      if (response?.data?.statusCode === 200) {
        toast.success(response?.data?.message);
      } else {
        toast.error(response?.error?.data?.message);
      }
      handleClose();
      router.push("/blogs");
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
              Delete Blogs
            </h1>

            <IoMdCloseCircleOutline
              onClick={handleClose}
              className="text-gray-500 text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <div>
            <div className=" text-center my-10 font-primary text-xl">
              Do you want to delete{" "}
              <span className="text-primary">{title}</span> ?
            </div>
            <div className="  flex items-end justify-end">
              <button
                onClick={handleDelete}
                className="bk-modal-red-button my-5"
              >
                Delete Your Blog
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BlogDeleteModal;
