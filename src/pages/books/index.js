import RootLayout from "@/component/Layouts/RootLayout";
import RegularBookCard from "@/component/UI/Books/RegularBooks/RegularBookCard";
import { Breadcrumb, Checkbox, Pagination, Slider } from "antd";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import AllBooks from "./[allBooks]";

const BookPage = () => {
  const [street, setStreet] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");

  const [demoData, setDemoData] = useState([]);
  // console.log("demoData", demoData);

  useEffect(() => {
    async function fetchDemoData() {
      try {
        const response = await fetch("DemoData/book.json"); // Fetch data from public folder
        const data = await response.json();
        setDemoData(data);
      } catch (error) {
        console.error("Error fetching demo data:", error);
      }
    }

    fetchDemoData();
  }, []);

  const currentRoute = usePathname();

  const onChange = (value) => {
    console.log("onChange: ", value);
  };
  const onAfterChange = (value) => {
    console.log("onAfterChange: ", value);
  };

  const handleStock = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  const plainOptions = ["In-Stock", "Out Of Stock"];

  return (
    <>
      <AllBooks></AllBooks>
    </>
  );
};

export default BookPage;

BookPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
