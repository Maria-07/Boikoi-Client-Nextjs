import Image from "next/image";
import img from "../assets/video/notFound.gif";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center ">
      <Image
        className="mt-[10%]"
        src={img}
        width={500}
        height={300}
        alt="Picture of the author"
      />
    </div>
  );
};

export default PageNotFound;
