import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import { AiOutlineFileAdd } from "react-icons/ai";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const CustomFileUploader = ({ setSignatureUpload }) => {
  //file uploaded issue
  const [fileList, setFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  // console.log("previewImage", previewImage);
  // console.log("previewTitle", previewTitle);
  // console.log("previewTitle", previewTitle);

  console.log("fileList", fileList[0]?.thumbUrl);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleFileChange = ({ fileList: newFileList }) =>
    setFileList(newFileList);
  setSignatureUpload(fileList[0]?.thumbUrl);

  const uploadButton = (
    <div className="">
      <PlusOutlined />
      <div
        style={{
          marginBottom: 15,
          fontSize: "10px",
        }}
      >
        <AiOutlineFileAdd className="text-5xl mx-auto my-1 text-primary" />{" "}
        Upload
      </div>
    </div>
  );

  // file uploaded added
  return (
    <>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleFileChange}
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
      {/* <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal> */}
    </>

    // <>
    //   <Upload
    //     action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    //     listType="picture-card"
    //     onPreview={handlePreview}
    //     onChange={handleFileChange}
    //   >
    //     {fileList.length >= 1 ? null : uploadButton}
    //   </Upload>
    //   <Modal
    //     open={previewOpen}
    //     title={previewTitle}
    //     footer={null}
    //     onCancel={handleCancel}
    //   >
    //     <img
    //       alt="example"
    //       style={{
    //         width: "100%",
    //       }}
    //       src={previewImage}
    //     />
    //   </Modal>
    // </>
  );
};

export default CustomFileUploader;
