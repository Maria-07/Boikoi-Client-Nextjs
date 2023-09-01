import { useDeleteOldBookMutation } from "@/redux/features/oldBook/oldBookApi";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";

const DeleteOldBookModal = ({ handleClose, clicked, book }) => {
  const router = useRouter();
  //   console.log("book", book);

  //! Delete blog :
  const [bookDelete, { isLoading }] = useDeleteOldBookMutation(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 100,
  });

  const handleDelete = async () => {
    console.log("delete");
    try {
      const id = book?.id;
      console.log("id", id);

      const response = await bookDelete({ id });
      if (isLoading) {
        console.log("loading");
      }
      console.log("response", response);
      if (response?.data?.statusCode === 200) {
        // router.push("/books");
        toast.success(response?.data?.message);
        handleClose();
        router.push("/myItems/oldBooks");
      } else {
        toast.error(response?.error?.data?.message);
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
              Delete <span className="text-primary">{book?.title}</span> Book
            </h1>

            <IoMdCloseCircleOutline
              onClick={handleClose}
              className="text-gray-500 text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <div>
            <div className=" text-center my-10 font-primary text-lg">
              Do you want to delete This book ?
            </div>
            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <div className="  flex items-end justify-end">
              <button
                onClick={handleDelete}
                className="bk-modal-red-button my-5"
              >
                Delete Book
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteOldBookModal;
