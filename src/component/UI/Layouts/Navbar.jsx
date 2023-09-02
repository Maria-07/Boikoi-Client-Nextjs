import Image from "next/image";
import logo from "@/assets/img/logo.png";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavbarSmallDevice from "./NavbarSmallDevice";
import Cookies from "js-cookie";
import { getAccessToken } from "@/redux/api/apiSlice";
import { useRouter } from "next/router";
import SearchBox from "../SearchBox/SearchBox";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { Dropdown } from "antd";
import UserInfo from "@/hook/UserInfo";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
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
    // console.log("userEmail logout", email);
  };

  return (
    <div>
      {" "}
      <div className="hidden lg:block sticky top-0">
        <div className="sm:w-[80%]  sm:mx-auto py-2 flex justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src={logo}
                width={150}
                height={150}
                alt="Picture of the author"
              />
            </Link>
          </div>
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
                currentRoute === "/shops" ? "active custom_link" : "custom_link"
              }
              href={"/shops/"}
            >
              Shops
            </Link>

            <Link
              className={
                currentRoute === "/books"
                  ? "active custom_link font-medium"
                  : "custom_link font-medium"
              }
              href={"/books"}
            >
              <Dropdown
                overlay={
                  <div className="bg-white p-2 w-[180px] border shadow-md rounded-sm">
                    <div>
                      <div className="mx-5">
                        <>
                          <Link href={"/books"}>
                            <button className="hover:text-primary my-2">
                              Regular Books
                            </button>
                          </Link>
                          <br />
                          <Link href={"/oldBooks"}>
                            <button className="hover:text-primary my-2">
                              Old Books
                            </button>
                          </Link>
                        </>
                      </div>
                    </div>
                  </div>
                }
                placement="bottomRight"
                arrow
              >
                <button>Books</button>
              </Dropdown>
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
            {userInfo?.role === "admin" && (
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
            )}

            <button onClick={() => setSearch(!search)} className="">
              <BiSearchAlt2 className="text-2xl hover:text-primary" />
            </button>
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
                  {accessToken && (
                    <div>
                      <h1 className="text-[15px] font-semibold text-dark mb-2 mt-4">
                        My Items
                      </h1>
                      <hr></hr>
                      <div className="mx-5">
                        {userInfo?.role === "bookShopOwner" ? (
                          <>
                            <Link href={"/myItems/shop"}>
                              <h1 className="hover:text-primary my-2">
                                My Shop
                              </h1>
                            </Link>
                            <Link href={"/myItems/book"}>
                              <h1 className="hover:text-primary my-2">
                                My Books
                              </h1>
                            </Link>
                          </>
                        ) : (
                          <>
                            <Link href={"/myItems/oldBooks"}>
                              <h1 className="hover:text-primary my-2">
                                My Old Books
                              </h1>
                            </Link>
                          </>
                        )}

                        <Link href={"/myItems/blogs"}>
                          <h1 className="hover:text-primary my-2">My Blogs</h1>
                        </Link>
                      </div>
                    </div>
                  )}
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
      <div className="lg:hidden block">
        <div className="flex items-center justify-between px-3 py-3">
          <div>
            <GiHamburgerMenu
              size={24}
              onClick={() => {
                setOpen(!open);
              }}
            />
          </div>
          <div>
            <Link href={"/"}>
              {" "}
              <Image
                src={logo}
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </Link>
          </div>
          <button
            onClick={() => setSearch(!search)}
            className="bk-input-button "
          >
            Search
          </button>
        </div>
        <NavbarSmallDevice isOpen={open} setOpen={setOpen}></NavbarSmallDevice>
      </div>
      {search && <SearchBox isOpen={search} setOpen={setSearch}></SearchBox>}
    </div>
  );
};

export default Navbar;
