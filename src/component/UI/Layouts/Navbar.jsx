import Image from "next/image";
import logo from "@/assets/img/logo.png";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import NavbarSmallDevice from "./NavbarSmallDevice";
import CurrentUserEmail from "@/hook/currentUserHook";
import Cookies from "js-cookie";
import { getAccessToken } from "@/redux/api/apiSlice";
import { useRouter } from "next/router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const currentRoute = usePathname();

  const token = getAccessToken();
  const email = CurrentUserEmail();
  console.log("userEmail", email);

  useEffect(() => {
    setAccessToken(token);
  }, [token]);

  const router = useRouter();

  const handleLogOut = () => {
    console.log("logout");
    Cookies.remove("accessToken");
    router.push("/");
    console.log("userEmail logout", email);
  };

  return (
    <div>
      {" "}
      <div className="hidden lg:block">
        <div className="sm:w-[80%]  sm:mx-auto py-4 flex justify-between">
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
              href={"/shops"}
            >
              Shops
            </Link>
            <Link
              className={
                currentRoute === "/books" ? "active custom_link" : "custom_link"
              }
              href={"/books"}
            >
              Books
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
                currentRoute === "/myItems"
                  ? "active custom_link"
                  : "custom_link"
              }
              href={token ? "/myItems" : "/login"}
              // href={"/myItems"}
            >
              My Item
            </Link>

            <div>
              {accessToken ? (
                <button className="input-button" onClick={handleLogOut}>
                  Log Out
                </button>
              ) : (
                <Link href={"/login"}>
                  <button className="input-button">Log In</button>
                </Link>
              )}
            </div>
            <button className="bk-input-button ">Search</button>
          </div>
        </div>
      </div>
      <div className="lg:hidden block">
        <div className="flex items-center justify-between px-3 py-2">
          <div>
            <GiHamburgerMenu
              onClick={() => {
                setOpen(!open);
              }}
            />
          </div>
          <div>
            <Image
              src={logo}
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </div>
          <button>Search</button>
        </div>
        <NavbarSmallDevice isOpen={open} setOpen={setOpen}></NavbarSmallDevice>
      </div>
    </div>
  );
};

export default Navbar;
