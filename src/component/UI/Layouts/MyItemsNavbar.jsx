import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillShop } from "react-icons/ai";
import { BsBook } from "react-icons/bs";

const MyItemsNavbar = () => {
  const currentRoute = usePathname();
  return (
    <div className="px-3 py-3  sm:min-h-[100vh]">
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
        </span>{" "}
        Create a shop
      </Link>
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
        </span>{" "}
        My Shop
      </Link>

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
        </span>{" "}
        My Books
      </Link>
    </div>
  );
};

export default MyItemsNavbar;
