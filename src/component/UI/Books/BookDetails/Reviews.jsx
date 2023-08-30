import { Avatar } from "antd";
import { AiOutlineUser } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { format } from "date-fns";
import { useRouter } from "next/router";
import UserInfo from "@/hook/UserInfo";
import { usePostBookReviewMutation } from "@/redux/features/book/bookApi";
import { useState } from "react";
import { toast } from "react-toastify";

const Reviews = ({ reviews, id }) => {
  const router = useRouter();
  const [review, setReview] = useState("");

  //! Post comment :
  const [postReview, { isLoading }] = usePostBookReviewMutation(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 100,
  });

  //! User data
  const user = UserInfo();
  // console.log("user");

  const handleReview = async () => {
    try {
      const reviews = {
        review: review,
        name: `${user?.firstName} ${user?.middleName} ${user?.lastName}`,
      };
      console.log("review", reviews, id);
      const response = await postReview({ id, reviews });
      console.log("response", response);
      if (isLoading) {
        console.log("loading");
      }
      if (response?.data?.statusCode === 200) {
        toast.success(response?.data?.message);
      } else {
        toast.error(response?.error?.data?.message);
      }
      router.push(`/books/bookDetails/${id}`);
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
      <div>
        <h1 className="text-dark font-semibold text-base my-5">
          {reviews.length} Reviews
        </h1>
        <hr />
        <div className="my-10">
          <div className="flex gap-2">
            {" "}
            <Avatar
              shape="square"
              icon={<AiOutlineUser className="text-3xl" />}
            />
            <div className="w-full">
              <textarea
                onChange={(e) => setReview(e.target.value)}
                className="w-full border rounded-t-md p-2 min-h-[100px]"
                placeholder="Add your review"
              />
              <div className="bg-gray-100 border rounded-b-md flex items-end justify-end mt-[-12px]  pb-2">
                {" "}
                <button
                  onClick={handleReview}
                  className="text-sm text-white px-2 py-1 bg-primary mt-[13px] mx-2 rounded-md hover:bg-secondary "
                >
                  Post review
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="my-5">
          {reviews.map((review, i) => (
            <div key={i}>
              {" "}
              <div className=" flex  sm:flex-nowrap flex-wrap gap-5 my-5">
                <Avatar icon={<BsPersonCircle className="text-3xl" />} />
                <div className="text-base text-primary font-medium font-primary w-full">
                  <p>{review.name}</p>
                  <div className="text-sm text-gray-500 font-medium font-primary mb-3 ">
                    <p>
                      {(() => {
                        try {
                          const createdAtDate = new Date(review?.date);
                          return format(
                            createdAtDate,
                            "MMM dd, yyyy - hh:mm a"
                          );
                        } catch (error) {
                          return "Review Time Not Found";
                        }
                      })()}
                    </p>
                    <div className="text-sm text-gray-500 font-medium font-primary mb-3">
                      <p>{calculateDaysAgo(review?.date)}</p>
                    </div>
                  </div>

                  <p className=" text-dark text-lg mb-2">{review.review}</p>
                  <hr />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
