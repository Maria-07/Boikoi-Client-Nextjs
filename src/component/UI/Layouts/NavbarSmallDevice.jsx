import { motion } from "framer-motion";
import Hamburger from "hamburger-react";

const NavbarSmallDevice = ({ isOpen, setOpen }) => {
  return (
    <div>
      {" "}
      <motion.div
        animate={{
          width: isOpen ? "300px" : "0px",
          transition: {
            duration: 0.5,
            type: "spring",
            // damping: 8,
          },
        }}
        className={`fixed w-[300px] top-0 left-0 z-50 bg-accent h-screen overflow-x-hidden`}
      >
        <header className="flex justify-between items-center m-2">
          <div className=" font-bold ml-2 font-secondary text-2xl">
            {" "}
            PC Wizard
          </div>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={24}
            color={isOpen ? "white" : "black"}
            label="Toggle Menu"
          />
        </header>
      </motion.div>
    </div>
  );
};

export default NavbarSmallDevice;
