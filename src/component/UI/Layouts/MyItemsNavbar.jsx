import UserInfo from "@/hook/UserInfo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AiFillShop, AiOutlineShop } from "react-icons/ai";
import { BiBook, BiNews } from "react-icons/bi";
import { BsBook } from "react-icons/bs";

const MyItemsNavbar = () => {
  const currentRoute = usePathname();

  const [role, setRole] = useState("");

  //! User data
  const user = UserInfo();
  // console.log(user?.role);

  useEffect(() => {
    setRole(user?.role);
  }, [user?.role]);

  return (
    <div className="px-3 py-3  sm:min-h-[100vh]">
      {/* {role === "bookShopOwner" && (
          <Link
            className={
              currentRoute === "/myItems/shop/createShop"
                ? "flex items-center gap-2 justify-center border-[2px] h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300 bg-primary border-primary text-white"
                : "flex items-center gap-2 justify-center text-dark border-[2px] h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300"
            }
            href={"/myItems/shop/createShop"}
          >
            <span>
              <AiFillShop className="text-lg" />
            </span>
            Create a shop
          </Link>
        )} */}
      {role === "bookShopOwner" && (
        <Link
          className={
            currentRoute === "/myItems/shop"
              ? "flex items-center gap-2 justify-center border-[2px] h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300 bg-primary border-primary text-white"
              : "flex items-center gap-2 justify-center text-dark border-[2px] h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300"
          }
          href={"/myItems/shop"}
        >
          <span>
            <AiFillShop className="text-lg" />
          </span>
          My Shop
        </Link>
      )}

      {role === "bookShopOwner" && (
        <Link
          className={
            currentRoute === "/myItems/book"
              ? "flex items-center gap-2 justify-center border-[2px] h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300 bg-primary border-primary text-white"
              : "flex items-center gap-2 justify-center text-dark border-[2px] h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300"
          }
          href={"/myItems/book"}
        >
          <span>
            <BsBook className="text-base" />
          </span>
          My Books
        </Link>
      )}
      {role === "customer" && (
        <Link
          className={
            currentRoute === "/myItems/oldBooks"
              ? "flex items-center gap-2 justify-center border-[2px] h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300 bg-primary border-primary text-white"
              : "flex items-center gap-2 justify-center text-dark border-[2px] h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300"
          }
          href={"/myItems/oldBooks"}
        >
          <span>
            <BsBook className="text-base" />
          </span>
          My Old Books
        </Link>
      )}
      <Link
        className={
          currentRoute === "/myItems/blogs"
            ? "flex items-center gap-2 justify-center border-[2px] h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300 bg-primary border-primary text-white"
            : "flex items-center gap-2 justify-center text-dark border-[2px] h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300"
        }
        href={"/myItems/blogs"}
      >
        <span>
          <BiNews className="text-base" />
        </span>
        My Blogs
      </Link>
      <Link
        className={
          currentRoute === "/myItems/favShops"
            ? "flex items-center gap-2 justify-center border-[2px] h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300 bg-primary border-primary text-white"
            : "flex items-center gap-2 justify-center text-dark border-[2px] h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300"
        }
        href={"/myItems/favShops"}
      >
        <span>
          <AiOutlineShop className="text-base" />
        </span>
        My Shortlisted Shops
      </Link>
      <Link
        className={
          currentRoute === "/myItems/favBooks"
            ? "flex items-center gap-2 justify-center border-[2px] h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300 bg-primary border-primary text-white"
            : "flex items-center gap-2 justify-center text-dark border-[2px] h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300"
        }
        href={"/myItems/favBooks"}
      >
        <span>
          <BiBook className="text-base" />
        </span>
        My Shortlisted Books
      </Link>
    </div>
  );
};

export default MyItemsNavbar;
