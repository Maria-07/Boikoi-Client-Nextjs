import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/logo.png";
import { Dropdown } from "antd";
import { AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import UserInfo from "@/hook/UserInfo";
import { getAccessToken } from "@/redux/api/apiSlice";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const AdminNavbar = () => {
  const [accessToken, setAccessToken] = useState("");
  const currentRoute = usePathname();
  const [userInfo, setUserInfo] = useState();

  const token = getAccessToken();

  //! User data
  const user = UserInfo();
  // console.log("user", user.role);

  useEffect(() => {
    setAccessToken(token);
    setUserInfo(user);
  }, [token, user]);

  const router = useRouter();

  const handleLogOut = () => {
    console.log("logout");
    Cookies.remove("accessToken");
    setUserInfo(null);
    router.push("/login");
  };
  return (
    <div>
      <div className=" px-10 py-2 mx-4 flex justify-between bg-white">
        <Link href={"/"}>
          <Image
            src={logo}
            width={150}
            height={150}
            alt="Picture of the author"
          />
        </Link>
        <div className="flex items-center gap-5">
          <Link
            className={
              currentRoute === "/" ? "active custom_link" : "custom_link"
            }
            href={"/"}
          >
            Home
          </Link>

          <Link
            className={
              currentRoute === "/blogs"
                ? "active custom_link font-medium"
                : "custom_link font-medium"
            }
            href={"/blogs"}
          >
            Blogs
          </Link>
          <Link
            className={
              currentRoute === "/admin"
                ? "active custom_link font-medium"
                : "custom_link font-medium"
            }
            href={"/admin"}
          >
            Dashboard
          </Link>

          <Dropdown
            overlay={
              <div className="bg-white p-8 w-[280px] border shadow-md rounded-sm">
                <div>
                  <h1 className="text-[15px] font-semibold text-dark mb-2">
                    My Account
                  </h1>
                  <hr></hr>
                  <div className="mx-5">
                    {accessToken ? (
                      <>
                        <Link href={"/myProfile"}>
                          <button className="hover:text-primary my-2">
                            My Profile
                          </button>
                        </Link>
                        <br />
                        <button
                          className="hover:text-primary"
                          onClick={handleLogOut}
                        >
                          Log Out
                        </button>
                      </>
                    ) : (
                      <>
                        <Link href={"/login"}>
                          <button className="hover:text-primary my-2">
                            Log In
                          </button>
                        </Link>
                        <br />
                        <Link href={"/signup"}>
                          <button className="hover:text-primary ">
                            Create Account
                          </button>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            }
            placement="bottomRight"
            arrow
            st
          >
            <button className="border p-1">
              <AiOutlineMenu className="text-xl hover:text-primary" />
            </button>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
