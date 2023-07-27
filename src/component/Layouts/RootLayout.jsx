import Image from "next/image";
import logo from "@/assets/img/logo.png";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { usePathname } from "next/navigation";

const RootLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const currentRoute = usePathname();
  return (
    <>
      <div className="">
        <div className="hidden md:block">
          <div className="sm:w-[80%]  sm:mx-auto py-4 flex justify-between">
            <div>
              <Image
                src={logo}
                width={150}
                height={150}
                alt="Picture of the author"
              />
            </div>
            <div className="flex items-center gap-5">
              <Link
                className={
                  currentRoute === "/"
                    ? "text-primary text-base font-semibold border-b-[2px] border-primary h-8"
                    : "text-dark text-base font-semibold h-8 hover:text-primary hover:border-primary hover:border-b-[2px] transition-all duration-100"
                }
                href={"/"}
              >
                Home
              </Link>
              <Link
                className={
                  currentRoute === "/shops"
                    ? "text-primary text-base font-semibold border-b-[2px] border-primary h-8"
                    : "text-dark text-base font-semibold h-8 hover:text-primary hover:border-primary hover:border-b-[2px] transition-all duration-100"
                }
                href={"/shops"}
              >
                Shops
              </Link>
              <Link
                className={
                  currentRoute === "/books"
                    ? "text-primary text-base font-semibold border-b-[2px] border-primary h-8"
                    : "text-dark text-base font-semibold h-8 hover:text-primary hover:border-primary hover:border-b-[2px] transition-all duration-100"
                }
                href={"/books"}
              >
                Books
              </Link>
              <Link
                className={
                  currentRoute === "/blogs"
                    ? "text-primary text-base font-semibold border-b-[2px] border-primary h-8"
                    : "text-dark text-base font-semibold h-8 hover:text-primary hover:border-primary hover:border-b-[2px] transition-all duration-100"
                }
                href={"/blogs"}
              >
                Blogs
              </Link>
              <Link
                className={
                  currentRoute === "/login"
                    ? "text-primary text-base font-semibold border-b-[2px] border-primary h-8"
                    : "text-dark text-base font-semibold h-8 hover:text-primary hover:border-primary hover:border-b-[2px] transition-all duration-100"
                }
                href={"/login"}
              >
                Login
              </Link>
              <Link
                className={
                  currentRoute === "/signup"
                    ? "text-primary text-base font-semibold border-b-[2px] border-primary h-8"
                    : "text-dark text-base font-semibold h-8 hover:text-primary hover:border-primary hover:border-b-[2px] transition-all duration-100"
                }
                href={"/signup"}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
        <div className="md:hidden block">
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
          {open && (
            <div className="absolute bg-white w-3/4 h-[100vh]">
              <div>
                <Link href={"/"}>
                  <div className="text-center text-dark text-base font-semibold h-8 p-2 transition-all hover:bg-primary hover:text-white">
                    Home
                  </div>
                </Link>
                <Link
                  className={
                    currentRoute === "/"
                      ? "text-primary text-base font-semibold border-b-[2px] border-primary h-8"
                      : "text-dark text-base font-semibold h-8 hover:text-primary hover:border-primary hover:border-b-[2px] transition-all duration-100"
                  }
                  href={"/shops"}
                >
                  <div className="text-center text-dark text-base font-semibold h-8 p-2 transition-all hover:bg-primary hover:text-white">
                    Shops
                  </div>
                </Link>
                <Link
                  className={
                    currentRoute === "/"
                      ? "text-primary text-base font-semibold border-b-[2px] border-primary h-8"
                      : "text-dark text-base font-semibold h-8 hover:text-primary hover:border-primary hover:border-b-[2px] transition-all duration-100"
                  }
                  href={"/books"}
                >
                  <div className="text-center text-dark text-base font-semibold h-8 p-2 transition-all hover:bg-primary hover:text-white">
                    Books
                  </div>
                </Link>
                <Link
                  className={
                    currentRoute === "/"
                      ? "text-primary text-base font-semibold border-b-[2px] border-primary h-8"
                      : "text-dark text-base font-semibold h-8 hover:text-primary hover:border-primary hover:border-b-[2px] transition-all duration-100"
                  }
                  href={"/blogs"}
                >
                  <div className="text-center text-dark text-base font-semibold h-8 p-2 transition-all hover:bg-primary hover:text-white">
                    Blogs
                  </div>
                </Link>
                <Link
                  className={
                    currentRoute === "/"
                      ? "text-primary text-base font-semibold border-b-[2px] border-primary h-8"
                      : "text-dark text-base font-semibold h-8 hover:text-primary hover:border-primary hover:border-b-[2px] transition-all duration-100"
                  }
                  href={"/login"}
                >
                  <div className="text-center text-dark text-base font-semibold h-8 p-2 transition-all hover:bg-primary hover:text-white">
                    Login
                  </div>
                </Link>
                <Link
                  className={
                    currentRoute === "/"
                      ? "text-primary text-base font-semibold border-b-[2px] border-primary h-8"
                      : "text-dark text-base font-semibold h-8 hover:text-primary hover:border-primary hover:border-b-[2px] transition-all duration-100"
                  }
                  href={"/signup"}
                >
                  <div className="text-center text-dark text-base font-semibold h-8 p-2 transition-all hover:bg-primary hover:text-white">
                    Sign Up
                  </div>
                </Link>
              </div>
              <div className=" absolute bottom-5 mx-5">
                <Image
                  src={logo}
                  width={200}
                  height={200}
                  alt="Picture of the author"
                />
              </div>
            </div>
          )}
        </div>

        <div>{children}</div>
        <div></div>
      </div>
    </>
  );
};
export default RootLayout;
