import Image from "next/image";
import img from "../../../assets/video/Processing.gif";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      {" "}
      <Image
        className="mt-[2%]"
        src={img}
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
};

export default Loader;
