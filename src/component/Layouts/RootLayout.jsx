import Navbar from "../UI/Layouts/navbar";

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
