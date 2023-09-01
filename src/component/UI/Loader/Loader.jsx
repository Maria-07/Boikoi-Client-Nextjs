import Image from "next/image";
import img from "../../../assets/video/Processing.gif";

const Loader = () => {
  return (
    <div className="flex items-center justify-center ">
      {" "}
      <Image
        className="mt-[5%]"
        src={img}
        width={200}
        height={200}
        alt="Picture of the author"
      />
    </div>
  );
};

export default Loader;
