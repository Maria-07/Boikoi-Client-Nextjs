import { BASE_URL } from "@/config/config";
import UserInfo from "@/hook/UserInfo";
import { usePostBlogCommentMutation } from "@/redux/features/blog/blogApi";
import { Avatar, Input } from "antd";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { toast } from "react-toastify";

const { TextArea } = Input;

const AddComments = ({ singleData }) => {
  const { id } = singleData;
  const [comment, setComment] = useState("");
  const router = useRouter();

  //! User data
  const user = UserInfo();

  //! Post comment :
  const [postBlogComment, { isLoading }] = usePostBlogCommentMutation(
    undefined,
    {
      refetchOnMountOrArgChange: true,
      pollingInterval: 100,
    }
  );

  const handleComment = async () => {
    try {
      const comments = {
        comment: comment,
        user_name: `${user?.firstName} ${user?.middleName} ${user?.lastName}`,
      };
      console.log("comments", comments, id);
      const response = await postBlogComment({ id, comments });
      console.log("response", response);
      if (isLoading) {
        console.log("loading");
      }
      if (response?.data?.statusCode === 200) {
        toast.success(response?.data?.message);
      } else {
        toast.error(response?.error?.data?.message);
      }
      router.push(`/blogs/${id}`);
    } catch (error) {
      console.log("error", error);
    }
  };

  //!  days count
  const calculateDaysAgo = (date) => {
    const currentDate = new Date();
    const reviewDate = new Date(date);
    const timeDifference = currentDate.getTime() - reviewDate.getTime();

    //! Calculate days, hours, and minutes
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutesAgo = Math.floor(timeDifference / (1000 * 60));

    if (daysAgo >= 1) {
      return `${daysAgo} day${daysAgo !== 1 ? "s" : ""} ago`;
    } else if (hoursAgo >= 1) {
      return `${hoursAgo} hour${hoursAgo !== 1 ? "s" : ""} ago`;
    } else if (minutesAgo >= 1) {
      return `${minutesAgo} minute${minutesAgo !== 1 ? "s" : ""} ago`;
    } else {
      return "Less than a minute ago";
    }
  };

  return (
    <div>
      <div className="my-10">
        <h1 className="text-base font-semibold text-dark my-7">
          Leave a comment
        </h1>
        <h1 className="input-title-font">Comment</h1>
        <TextArea
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          placeholder="About Your Shop"
        />
        <button onClick={handleComment} className="bk-input-button my-5  ">
          POST COMMENT
        </button>
      </div>
      <div className="my-10">
        <h1 className="text-lg text-gray-600 font-semibold border-gray-200 pb-2 mb-3">
          comments ({singleData?.comments.length})
        </h1>

        {singleData?.comments?.map((comments, i) => (
          <div key={i}>
            {" "}
            <div className=" flex  flex-wrap gap-5">
              <Avatar icon={<BsPersonCircle className="text-3xl" />} />
              <div className="text-base text-primary font-medium font-primary">
                <p>{comments.name}</p>
                <div className="text-sm text-gray-500 font-medium font-primary mb-2">
                  <p>
                    {(() => {
                      try {
                        const createdAtDate = new Date(comments?.date);
                        return format(createdAtDate, "MMM dd, yyyy - hh:mm a");
                      } catch (error) {
                        return "comments Time Not Found";
                      }
                    })()}
                  </p>
                </div>
                <div className="text-sm text-dark font-medium font-primary mb-3">
                  <p>{calculateDaysAgo(comments?.date)}</p>
                </div>
              </div>
            </div>
            {/* <div className="text-sm text-gray-400  ml-12 mb-5">
              <Rate
                allowHalf
                disabled
                defaultValue={comments.individualRating}
              />{" "}
              {comments.individualRating} out of 5
            </div> */}
            <div className="my-3 mx-12">{comments.comment}</div>
            <hr className="my-5" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddComments;
