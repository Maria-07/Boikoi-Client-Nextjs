import Image from "next/image";
import aboutUs from "../../../assets/img/aboutUs.png";
import { useGetProfileQuery } from "@/redux/features/auth/userApi";
import { useEffect } from "react";

const AboutUs = () => {
  const { data: userProfile, isLoading, isError } = useGetProfileQuery();

  useEffect(() => {
    if (!isLoading && !isError) {
      console.log("User Profile:", userProfile);
    }
  }, [userProfile, isLoading, isError]);
  return (
    <div className="bg-[#1b6173bc]">
      {" "}
      <div className="lg:w-[80%] lg:mx-auto py-4 my-28">
        <div className="flex items-center lg:flex-nowrap flex-wrap">
          <div className="lg:w-3/4  lg:p-24 p-5">
            <div>
              <h1 className="text-3xl font-primary text-popover my-7 font-semibold">
                ABOUT US
              </h1>
              <p className="text-xl font-secondary font-normal tracking-wide text-popover">
                At Boikoi, we believe in the power of books to transform lives
                and ignite imagination. We are an online platform dedicated to
                connecting book lovers, authors, and bookshops, creating a
                vibrant community centered around a shared love for literature.
                Our mission is to make the world of books more accessible,
                convenient, and engaging for readers everywhere. Whether
                you&apos;re searching for your next great read, looking to sell
                or trade your old books, or seeking inspiration and insights
                from fellow book enthusiasts, Boikoi is your go-to destination.
              </p>
            </div>
          </div>
          <div className="">
            {" "}
            <Image
              src={aboutUs}
              width={900}
              height={800}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
