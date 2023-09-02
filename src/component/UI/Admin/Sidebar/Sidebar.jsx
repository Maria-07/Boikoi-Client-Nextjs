import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillShop } from "react-icons/ai";
import { BsBook } from "react-icons/bs";

const Sidebar = () => {
  const currentRoute = usePathname();
  return (
    <div>
      <div className="p-4">
        <Link
          className={
            currentRoute === "/admin/users"
              ? "flex items-center gap-2 justify-center border-[2px] h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300 bg-primary border-primary text-white"
              : "flex items-center gap-2 justify-center text-white border-[2px] h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300"
          }
          href={"/admin/users"}
        >
          <span>
            <AiFillShop className="text-lg" />
          </span>
          users
        </Link>
        <Link
          className={
            currentRoute === "/admin/shops"
              ? "flex items-center gap-2 justify-center border-[2px] h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300 bg-primary border-primary text-white"
              : "flex items-center gap-2 justify-center text-white border-[2px] h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300"
          }
          href={"/admin/shops"}
        >
          <span>
            <AiFillShop className="text-lg" />
          </span>
          Shops
        </Link>
        <Link
          className={
            currentRoute === "/admin/books"
              ? "flex items-center gap-2 justify-center border-[2px] h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300 bg-primary border-primary text-white"
              : "flex items-center gap-2 justify-center text-white border-[2px] h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300"
          }
          href={"/admin/books"}
        >
          <span>
            <BsBook className="text-base" />
          </span>
          Books
        </Link>
        <Link
          className={
            currentRoute === "/admin/oldBooks"
              ? "flex items-center gap-2 justify-center border-[2px] h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300 bg-primary border-primary text-white"
              : "flex items-center gap-2 justify-center text-white border-[2px] h-8 my-item-button text-base font-medium leading-5 tracking-wide uppercase pt-1 pb-1 transition ease-in-out duration-300"
          }
          href={"/admin/oldBooks"}
        >
          <span>
            <BsBook className="text-base" />
          </span>
          Old Books
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
