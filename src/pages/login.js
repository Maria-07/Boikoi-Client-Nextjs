import RootLayout from "@/component/Layouts/RootLayout";
import Image from "next/image";
import logo from "../assets/video/login.gif";
import Login from "@/component/UI/Login/Login";
import { Divider } from "antd";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import Link from "next/link";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div className="sm:w-[70%]  sm:mx-auto mt-[10%] my-10 px-5">
      <div className="grid sm:grid-cols-2 grid-cols-1">
        <div className="mx-auto">
          <Image
            src={logo}
            width={"auto"}
            height={"auto"}
            alt="Picture of the author"
          />
        </div>
        <div className="sm:mx-auto">
          <h1 className="font-primary text-2xl font-bold text-primary">
            WELCOME BACK
          </h1>
          <h3 className="text-base font-normal text-gray-500">
            Login to continue
          </h3>
          <div>
            <Login></Login>
          </div>
          <div className="sm:w-[150%]">
            <Divider>Or Login with</Divider>
          </div>
          <div className="my-5">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "http://localhost:3000/",
                  })
                }
                className="flex items-center gap-2 input-button"
              >
                <BsGoogle />
                Google
              </button>
              <button
                onClick={() =>
                  signIn("github", {
                    callbackUrl: "http://localhost:3000/",
                  })
                }
                className="flex items-center gap-2 input-button"
              >
                <BsGithub /> Github
              </button>
              <button className="flex items-center gap-2 input-button">
                <BsFacebook /> Facebook
              </button>
            </div>
          </div>

          <div className="text-sm font-medium text-gray-600 flex gap-2 my-5">
            Don&apos;t have any account ?
            <Link href={"/signup"}>
              <button className="text-primary font-semibold"> Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
