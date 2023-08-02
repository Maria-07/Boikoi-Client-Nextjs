import Navbar from "../UI/Layouts/Navbar";

const RootLayout = ({ children }) => {
  return (
    <>
      <div className="">
        <Navbar></Navbar>
        <div>{children}</div>
        <div></div>
      </div>
    </>
  );
};
export default RootLayout;
