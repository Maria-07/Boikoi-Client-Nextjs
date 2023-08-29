import Navbar from "../UI/Layouts/Navbar";

const RootLayout = ({ children }) => {
  return (
    <>
      <div className="">
        <div className="sticky top-0 z-50 bg-[#ffffffca] border-b-[1px] shadow-md">
          <Navbar></Navbar>
        </div>

        <div>{children}</div>
        <div></div>
      </div>
    </>
  );
};
export default RootLayout;
