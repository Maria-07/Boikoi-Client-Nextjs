import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/img/boi-koi_logo_vertical.png";
import { FaFacebookF, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-dark px-10 py-24 ">
      <div className="sm:w-[80%]  sm:mx-auto">
        <div className="grid sm:grid-cols-5 md:grid-cols-5 grid-cols-3 gap-5 mb-24">
          <div className="mx-auto">
            <Link href={"/"}>
              <Image
                src={logo}
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </Link>
          </div>
          <div className="mx-auto">
            <Link href={"/home"}>
              <h2 className="text-gray-400 hover:text-white text-sm mb-1">
                Home
              </h2>
            </Link>
            <Link href={"/shops"}>
              <h2 className="text-gray-400 hover:text-white text-sm mb-1">
                Shops
              </h2>
            </Link>
            <Link href={"/books"}>
              <h2 className="text-gray-400 hover:text-white text-sm mb-1">
                Books
              </h2>
            </Link>
            <Link href={"/blogs"}>
              <h2 className="text-gray-400 hover:text-white text-sm mb-1">
                Blogs
              </h2>
            </Link>
          </div>

          <div className="mx-auto">
            <Link href={"/"}>
              <h2 className="text-gray-400 hover:text-white text-sm mb-1">
                Terms & Conditions
              </h2>
            </Link>
            <Link href={"/"}>
              <h2 className="text-gray-400 hover:text-white text-sm mb-1">
                Privacy Policy
              </h2>
            </Link>
            <Link href={"/"}>
              <h2 className="text-gray-400 hover:text-white text-sm mb-1">
                Cookie Policy
              </h2>
            </Link>
          </div>
          <div className="mx-auto">
            <h2 className="text-white">Don&apos;t have an account?</h2>

            <Link href={"/signup"}>
              <h2 className="text-gray-400 hover:text-white text-sm mb-1">
                Sign Up
              </h2>
            </Link>
            <Link href={"/login"}>
              <h2 className="text-gray-400 hover:text-white text-sm mb-1">
                Login
              </h2>
            </Link>
          </div>

          <div className="mx-auto">
            <Link href={"/"}>
              <h2 className="text-gray-400 hover:text-white text-sm mb-1">
                About US
              </h2>
            </Link>
            <Link href={"/"}>
              <h2 className="text-gray-400 hover:text-white text-sm mb-1">
                Why Us
              </h2>
            </Link>
            <div className="flex items-center gap-5 my-4">
              <FaFacebookF className="text-3xl p-2 border border-gray-400 text-gray-400 hover:bg-blue-700 hover:text-white" />
              <FaInstagram className="text-3xl p-2 border border-gray-400 text-gray-400 hover:bg-rose-700 hover:text-white" />
              <FaTwitch className="text-3xl p-2 border border-gray-400 text-gray-400 hover:bg-purple-700 hover:text-white" />
              <FaTwitter className="text-3xl p-2 border border-gray-400 text-gray-400 hover:bg-sky-700 hover:text-white" />
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-sm text-center mt-8">
          Copyright © 2022 all rights reserved | This whole project made by ❤️
          <span className="text-primary">Shanjida Rahman Maria</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
