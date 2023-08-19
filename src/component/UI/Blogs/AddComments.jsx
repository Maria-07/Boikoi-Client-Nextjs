import { Input } from "antd";
import { useState } from "react";

const { TextArea } = Input;

const AddComments = () => {
  const [comment, setComment] = useState("");
  return (
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
      <button className="bk-input-button my-5  ">POST COMMENT</button>
    </div>
  );
};

export default AddComments;
