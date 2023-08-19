import { motion } from "framer-motion";
import Hamburger from "hamburger-react";
import Link from "next/link";
import logo from "../../../assets/img/dark-logo-01.png";
import Image from "next/image";
import { AiFillShop, AiOutlineHome } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getAccessToken } from "@/redux/api/apiSlice";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { BiBookBookmark, BiLogOut, BiLogoBlogger } from "react-icons/bi";
import { BsCardList } from "react-icons/bs";

const NavbarSmallDevice = ({ isOpen, setOpen }) => {
  const currentRoute = usePathname();
  const [accessToken, setAccessToken] = useState("");

  const token = getAccessToken();

  useEffect(() => {
    setAccessToken(token);
  }, [token]);

  const router = useRouter();

  const handleLogOut = () => {
    console.log("logout");
    Cookies.remove("accessToken");
    router.push("/");
  };

  return (
    <div className="relative">
      {" "}
      <motion.div
        animate={{
          width: isOpen ? "250px" : "0px",
          transition: {
            duration: 0.5,
            type: "spring",
            // damping: 8,
          },
        }}
        className={`fixed w-[250px] top-0 left-0 z-50 bg-secondary shadow-md h-screen overflow-x-hidden`}
      >
        <header className="flex justify-between items-center m-2">
          <div className="my-1">
            <Link href={"/"}>
              <Image
                src={logo}
                width={120}
                height={120}
                alt="Picture of the author"
              />
            </Link>
          </div>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={20}
            color={isOpen ? "white" : "black"}
            label="Toggle Menu"
          />
        </header>
        <div className="px-8 my-10">
          <Link
            className={
              currentRoute === "/"
                ? "flex items-center gap-2 justify-center border-[1px] rounded-sm h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300 bg-primary border-primary text-white"
                : "flex items-center gap-2 justify-center text-white border-[1px] rounded-sm h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300"
            }
            href={"/"}
          >
            <span>
              <AiOutlineHome className="text-lg" />
            </span>
            Home
          </Link>
          <Link
            className={
              currentRoute === "/shops"
                ? "flex items-center gap-2 justify-center border-[1px] rounded-sm h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300 bg-primary border-primary text-white"
                : "flex items-center gap-2 justify-center text-white border-[1px] rounded-sm h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300"
            }
            href={"/shops/"}
          >
            <span>
              <AiFillShop className="text-lg" />
            </span>
            shops
          </Link>
          <Link
            className={
              currentRoute === "/books"
                ? "flex items-center gap-2 justify-center border-[1px] rounded-sm h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300 bg-primary border-primary text-white"
                : "flex items-center gap-2 justify-center text-white border-[1px] rounded-sm h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300"
            }
            href={"/books"}
          >
            <span>
              <BiBookBookmark className="text-lg" />
            </span>
            Books
          </Link>
          <Link
            className={
              currentRoute === "/blogs"
                ? "flex items-center gap-2 justify-center border-[1px] rounded-sm h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300 bg-primary border-primary text-white"
                : "flex items-center gap-2 justify-center text-white border-[1px] rounded-sm h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300"
            }
            href={"/blogs"}
          >
            <span>
              <BiLogoBlogger className="text-lg" />
            </span>
            Blogs
          </Link>

          <Link
            className={
              currentRoute === "/myItems"
                ? "flex items-center gap-2 justify-center border-[1px] rounded-sm h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300 bg-primary border-primary text-white"
                : "flex items-center gap-2 justify-center text-white border-[1px] rounded-sm h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300"
            }
            href={token ? "/myItems" : "/login"}
            // href={"/myItems"}
          >
            <span>
              <BsCardList className="text-lg" />
            </span>
            My Item
          </Link>
        </div>
        <div>
          {" "}
          <div className=" absolute bottom-0 mb-10 mx-[5%]">
            {accessToken ? (
              <button
                className="input-button  w-[100px] ml-[50%] flex items-center gap-2"
                onClick={handleLogOut}
              >
                <BiLogOut className="font-semibold text-lg" />
                Log Out
              </button>
            ) : (
              <div className="flex items-center gap-5">
                {" "}
                <Link href={"/login"}>
                  <button className="input-button w-[100px]">Log In</button>
                </Link>
                <Link href={"/signup"}>
                  <button className="input-button w-[100px]">Sign Up</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NavbarSmallDevice;
