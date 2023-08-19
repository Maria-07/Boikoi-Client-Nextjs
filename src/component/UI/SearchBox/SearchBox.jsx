import { useRouter } from "next/router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Divider } from "antd";

const SearchBox = ({ isOpen, setOpen }) => {
  const [value, setValue] = useState("");

  const router = useRouter();

  const handleSearchBox = () => {
    router.push(`/shops/${value}`);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      // className="z-90"
    >
      {" "}
      <div className="absolute z-40 bg-[rgba(217,217,217,0.86)] shadow-md shadow-[rgba(0,0,0,0.19)] w-full  py-5 px-16">
        <h1 className="px-5">Advance Search</h1>
        <Divider className="mx-5 mb-5  bg-primary" />
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-2 ">
          <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-2 ">
              <div>
                <h1 className="text-[16px] text-secondary my-2 font-semibold font-primary">
                  Faculty Name
                </h1>
                <select
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  className="input border w-full py-[6px] px-2 text-sm "
                >
                  <option value="Kemal Ataturk Avenue"></option>
                  <option value="Bangabandhu Avenue">Bangabandhu Avenue</option>
                  <option value="Shahbagh Avenue">Shahbagh Avenue</option>
                  <option value="New Eskaton Road">New Eskaton Road</option>
                  <option value="Bijoy Sarani">Bijoy Sarani</option>
                  <option value="Manik Mia Avenue">Manik Mia Avenue</option>
                  <option value="Pragati Sarani (Mirpur Road)">
                    Pragati Sarani (Mirpur Road)
                  </option>
                  <option value="Elephant Road">Elephant Road</option>
                  <option value="Dhanmondi Road">Dhanmondi Road</option>
                  <option value="Gulshan Avenue">Gulshan Avenue</option>
                  <option value="Banani Road">Banani Road</option>
                  <option value="Mohakhali Flyover">Mohakhali Flyover</option>
                  <option value="Kakrail Road">Kakrail Road</option>
                  <option value="Motijheel C/A (Commercial Area)">
                    Motijheel C/A (Commercial Area)
                  </option>
                  <option value="Farmgate Road">Farmgate Road</option>
                  <option value="Mirpur Road">Mirpur Road</option>
                  <option value="Shyamoli Square">Shyamoli Square</option>
                  <option value="Tejgaon Industrial Area">
                    Tejgaon Industrial Area
                  </option>
                  <option value="Karwan Bazar">Karwan Bazar</option>
                  <option value="Green Road">Green Road</option>
                  <option value="Moghbazar">Moghbazar</option>
                  <option value="Malibagh Chowdhurypara Road">
                    Malibagh Chowdhurypara Road
                  </option>
                  <option value="Bijoynagar Road">Bijoynagar Road</option>
                  <option value="Wari Road">Wari Road</option>
                  <option value="Siddeswari Circular Road">
                    Siddeswari Circular Road
                  </option>
                  <option value="Kakrail Road">Kakrail Road</option>
                  <option value="Satmasjid Road">Satmasjid Road</option>
                  <option value="Mohammadpur Bus Stand Road">
                    Mohammadpur Bus Stand Road
                  </option>
                  <option value="Kazi Nazrul Islam Avenue (Airport Road)">
                    Kazi Nazrul Islam Avenue (Airport Road)
                  </option>
                  <option value="Satrasta Road">Satrasta Road</option>
                  <option value="Siddikbazar Road">Siddikbazar Road</option>
                  <option value="Lalbagh Road">Lalbagh Road</option>
                  <option value="Chankharpul Road">Chankharpul Road</option>
                  <option value="Badda Link Road">Badda Link Road</option>
                  <option value="Niketan Road">Niketan Road</option>
                  <option value="Malibagh Chowdhurypara Road">
                    Malibagh Chowdhurypara Road
                  </option>
                  <option value="Rampura Road">Rampura Road</option>
                  <option value="Siddeshwari Circular Road">
                    Siddeshwari Circular Road
                  </option>
                  <option value="Baily Road">Baily Road</option>
                  <option value="Hatirjheel Link Road">
                    Hatirjheel Link Road
                  </option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div>
                <h1 className="text-[16px] text-secondary my-2 font-semibold font-primary">
                  Class Level
                </h1>
                <select
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  className="input border w-full py-[6px] px-2 text-sm "
                >
                  <option value="Kemal Ataturk Avenue"></option>
                  <option value="Bangabandhu Avenue">Bangabandhu Avenue</option>
                  <option value="Shahbagh Avenue">Shahbagh Avenue</option>
                  <option value="New Eskaton Road">New Eskaton Road</option>
                  <option value="Bijoy Sarani">Bijoy Sarani</option>
                  <option value="Manik Mia Avenue">Manik Mia Avenue</option>
                  <option value="Pragati Sarani (Mirpur Road)">
                    Pragati Sarani (Mirpur Road)
                  </option>
                  <option value="Elephant Road">Elephant Road</option>
                  <option value="Dhanmondi Road">Dhanmondi Road</option>
                  <option value="Gulshan Avenue">Gulshan Avenue</option>
                  <option value="Banani Road">Banani Road</option>
                  <option value="Mohakhali Flyover">Mohakhali Flyover</option>
                  <option value="Kakrail Road">Kakrail Road</option>
                  <option value="Motijheel C/A (Commercial Area)">
                    Motijheel C/A (Commercial Area)
                  </option>
                  <option value="Farmgate Road">Farmgate Road</option>
                  <option value="Mirpur Road">Mirpur Road</option>
                  <option value="Shyamoli Square">Shyamoli Square</option>
                  <option value="Tejgaon Industrial Area">
                    Tejgaon Industrial Area
                  </option>
                  <option value="Karwan Bazar">Karwan Bazar</option>
                  <option value="Green Road">Green Road</option>
                  <option value="Moghbazar">Moghbazar</option>
                  <option value="Malibagh Chowdhurypara Road">
                    Malibagh Chowdhurypara Road
                  </option>
                  <option value="Bijoynagar Road">Bijoynagar Road</option>
                  <option value="Wari Road">Wari Road</option>
                  <option value="Siddeswari Circular Road">
                    Siddeswari Circular Road
                  </option>
                  <option value="Kakrail Road">Kakrail Road</option>
                  <option value="Satmasjid Road">Satmasjid Road</option>
                  <option value="Mohammadpur Bus Stand Road">
                    Mohammadpur Bus Stand Road
                  </option>
                  <option value="Kazi Nazrul Islam Avenue (Airport Road)">
                    Kazi Nazrul Islam Avenue (Airport Road)
                  </option>
                  <option value="Satrasta Road">Satrasta Road</option>
                  <option value="Siddikbazar Road">Siddikbazar Road</option>
                  <option value="Lalbagh Road">Lalbagh Road</option>
                  <option value="Chankharpul Road">Chankharpul Road</option>
                  <option value="Badda Link Road">Badda Link Road</option>
                  <option value="Niketan Road">Niketan Road</option>
                  <option value="Malibagh Chowdhurypara Road">
                    Malibagh Chowdhurypara Road
                  </option>
                  <option value="Rampura Road">Rampura Road</option>
                  <option value="Siddeshwari Circular Road">
                    Siddeshwari Circular Road
                  </option>
                  <option value="Baily Road">Baily Road</option>
                  <option value="Hatirjheel Link Road">
                    Hatirjheel Link Road
                  </option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div>
                <h1 className="text-[16px] text-secondary my-2 font-semibold font-primary">
                  Author Name
                </h1>
                <select
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  className="input border w-full py-[6px] px-2 text-sm "
                >
                  <option value="Kemal Ataturk Avenue"></option>
                  <option value="Bangabandhu Avenue">Bangabandhu Avenue</option>
                  <option value="Shahbagh Avenue">Shahbagh Avenue</option>
                  <option value="New Eskaton Road">New Eskaton Road</option>
                  <option value="Bijoy Sarani">Bijoy Sarani</option>
                  <option value="Manik Mia Avenue">Manik Mia Avenue</option>
                  <option value="Pragati Sarani (Mirpur Road)">
                    Pragati Sarani (Mirpur Road)
                  </option>
                  <option value="Elephant Road">Elephant Road</option>
                  <option value="Dhanmondi Road">Dhanmondi Road</option>
                  <option value="Gulshan Avenue">Gulshan Avenue</option>
                  <option value="Banani Road">Banani Road</option>
                  <option value="Mohakhali Flyover">Mohakhali Flyover</option>
                  <option value="Kakrail Road">Kakrail Road</option>
                  <option value="Motijheel C/A (Commercial Area)">
                    Motijheel C/A (Commercial Area)
                  </option>
                  <option value="Farmgate Road">Farmgate Road</option>
                  <option value="Mirpur Road">Mirpur Road</option>
                  <option value="Shyamoli Square">Shyamoli Square</option>
                  <option value="Tejgaon Industrial Area">
                    Tejgaon Industrial Area
                  </option>
                  <option value="Karwan Bazar">Karwan Bazar</option>
                  <option value="Green Road">Green Road</option>
                  <option value="Moghbazar">Moghbazar</option>
                  <option value="Malibagh Chowdhurypara Road">
                    Malibagh Chowdhurypara Road
                  </option>
                  <option value="Bijoynagar Road">Bijoynagar Road</option>
                  <option value="Wari Road">Wari Road</option>
                  <option value="Siddeswari Circular Road">
                    Siddeswari Circular Road
                  </option>
                  <option value="Kakrail Road">Kakrail Road</option>
                  <option value="Satmasjid Road">Satmasjid Road</option>
                  <option value="Mohammadpur Bus Stand Road">
                    Mohammadpur Bus Stand Road
                  </option>
                  <option value="Kazi Nazrul Islam Avenue (Airport Road)">
                    Kazi Nazrul Islam Avenue (Airport Road)
                  </option>
                  <option value="Satrasta Road">Satrasta Road</option>
                  <option value="Siddikbazar Road">Siddikbazar Road</option>
                  <option value="Lalbagh Road">Lalbagh Road</option>
                  <option value="Chankharpul Road">Chankharpul Road</option>
                  <option value="Badda Link Road">Badda Link Road</option>
                  <option value="Niketan Road">Niketan Road</option>
                  <option value="Malibagh Chowdhurypara Road">
                    Malibagh Chowdhurypara Road
                  </option>
                  <option value="Rampura Road">Rampura Road</option>
                  <option value="Siddeshwari Circular Road">
                    Siddeshwari Circular Road
                  </option>
                  <option value="Baily Road">Baily Road</option>
                  <option value="Hatirjheel Link Road">
                    Hatirjheel Link Road
                  </option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div>
                <h1 className="text-[16px] text-secondary my-2 font-semibold font-primary">
                  Genre
                </h1>
                <select
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  className="input border w-full py-[6px] px-2 text-sm "
                >
                  <option value="Kemal Ataturk Avenue"></option>
                  <option value="Bangabandhu Avenue">Bangabandhu Avenue</option>
                  <option value="Shahbagh Avenue">Shahbagh Avenue</option>
                  <option value="New Eskaton Road">New Eskaton Road</option>
                  <option value="Bijoy Sarani">Bijoy Sarani</option>
                  <option value="Manik Mia Avenue">Manik Mia Avenue</option>
                  <option value="Pragati Sarani (Mirpur Road)">
                    Pragati Sarani (Mirpur Road)
                  </option>
                  <option value="Elephant Road">Elephant Road</option>
                  <option value="Dhanmondi Road">Dhanmondi Road</option>
                  <option value="Gulshan Avenue">Gulshan Avenue</option>
                  <option value="Banani Road">Banani Road</option>
                  <option value="Mohakhali Flyover">Mohakhali Flyover</option>
                  <option value="Kakrail Road">Kakrail Road</option>
                  <option value="Motijheel C/A (Commercial Area)">
                    Motijheel C/A (Commercial Area)
                  </option>
                  <option value="Farmgate Road">Farmgate Road</option>
                  <option value="Mirpur Road">Mirpur Road</option>
                  <option value="Shyamoli Square">Shyamoli Square</option>
                  <option value="Tejgaon Industrial Area">
                    Tejgaon Industrial Area
                  </option>
                  <option value="Karwan Bazar">Karwan Bazar</option>
                  <option value="Green Road">Green Road</option>
                  <option value="Moghbazar">Moghbazar</option>
                  <option value="Malibagh Chowdhurypara Road">
                    Malibagh Chowdhurypara Road
                  </option>
                  <option value="Bijoynagar Road">Bijoynagar Road</option>
                  <option value="Wari Road">Wari Road</option>
                  <option value="Siddeswari Circular Road">
                    Siddeswari Circular Road
                  </option>
                  <option value="Kakrail Road">Kakrail Road</option>
                  <option value="Satmasjid Road">Satmasjid Road</option>
                  <option value="Mohammadpur Bus Stand Road">
                    Mohammadpur Bus Stand Road
                  </option>
                  <option value="Kazi Nazrul Islam Avenue (Airport Road)">
                    Kazi Nazrul Islam Avenue (Airport Road)
                  </option>
                  <option value="Satrasta Road">Satrasta Road</option>
                  <option value="Siddikbazar Road">Siddikbazar Road</option>
                  <option value="Lalbagh Road">Lalbagh Road</option>
                  <option value="Chankharpul Road">Chankharpul Road</option>
                  <option value="Badda Link Road">Badda Link Road</option>
                  <option value="Niketan Road">Niketan Road</option>
                  <option value="Malibagh Chowdhurypara Road">
                    Malibagh Chowdhurypara Road
                  </option>
                  <option value="Rampura Road">Rampura Road</option>
                  <option value="Siddeshwari Circular Road">
                    Siddeshwari Circular Road
                  </option>
                  <option value="Baily Road">Baily Road</option>
                  <option value="Hatirjheel Link Road">
                    Hatirjheel Link Road
                  </option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div>
                <h1 className="text-[16px] text-secondary my-2 font-semibold font-primary">
                  Publisher Name
                </h1>
                <select
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  className="input border w-full py-[6px] px-2 text-sm "
                >
                  <option value="Kemal Ataturk Avenue"></option>
                  <option value="Bangabandhu Avenue">Bangabandhu Avenue</option>
                  <option value="Shahbagh Avenue">Shahbagh Avenue</option>
                  <option value="New Eskaton Road">New Eskaton Road</option>
                  <option value="Bijoy Sarani">Bijoy Sarani</option>
                  <option value="Manik Mia Avenue">Manik Mia Avenue</option>
                  <option value="Pragati Sarani (Mirpur Road)">
                    Pragati Sarani (Mirpur Road)
                  </option>
                  <option value="Elephant Road">Elephant Road</option>
                  <option value="Dhanmondi Road">Dhanmondi Road</option>
                  <option value="Gulshan Avenue">Gulshan Avenue</option>
                  <option value="Banani Road">Banani Road</option>
                  <option value="Mohakhali Flyover">Mohakhali Flyover</option>
                  <option value="Kakrail Road">Kakrail Road</option>
                  <option value="Motijheel C/A (Commercial Area)">
                    Motijheel C/A (Commercial Area)
                  </option>
                  <option value="Farmgate Road">Farmgate Road</option>
                  <option value="Mirpur Road">Mirpur Road</option>
                  <option value="Shyamoli Square">Shyamoli Square</option>
                  <option value="Tejgaon Industrial Area">
                    Tejgaon Industrial Area
                  </option>
                  <option value="Karwan Bazar">Karwan Bazar</option>
                  <option value="Green Road">Green Road</option>
                  <option value="Moghbazar">Moghbazar</option>
                  <option value="Malibagh Chowdhurypara Road">
                    Malibagh Chowdhurypara Road
                  </option>
                  <option value="Bijoynagar Road">Bijoynagar Road</option>
                  <option value="Wari Road">Wari Road</option>
                  <option value="Siddeswari Circular Road">
                    Siddeswari Circular Road
                  </option>
                  <option value="Kakrail Road">Kakrail Road</option>
                  <option value="Satmasjid Road">Satmasjid Road</option>
                  <option value="Mohammadpur Bus Stand Road">
                    Mohammadpur Bus Stand Road
                  </option>
                  <option value="Kazi Nazrul Islam Avenue (Airport Road)">
                    Kazi Nazrul Islam Avenue (Airport Road)
                  </option>
                  <option value="Satrasta Road">Satrasta Road</option>
                  <option value="Siddikbazar Road">Siddikbazar Road</option>
                  <option value="Lalbagh Road">Lalbagh Road</option>
                  <option value="Chankharpul Road">Chankharpul Road</option>
                  <option value="Badda Link Road">Badda Link Road</option>
                  <option value="Niketan Road">Niketan Road</option>
                  <option value="Malibagh Chowdhurypara Road">
                    Malibagh Chowdhurypara Road
                  </option>
                  <option value="Rampura Road">Rampura Road</option>
                  <option value="Siddeshwari Circular Road">
                    Siddeshwari Circular Road
                  </option>
                  <option value="Baily Road">Baily Road</option>
                  <option value="Hatirjheel Link Road">
                    Hatirjheel Link Road
                  </option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>
            <div>
              {" "}
              <button
                className="bk-input-button my-5"
                onClick={handleSearchBox}
              >
                Search By Book
              </button>
            </div>
          </div>{" "}
          <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-2 ">
              <div>
                <h1 className="text-[16px] text-secondary my-2 font-semibold font-primary">
                  City
                </h1>
                <select
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  className="input border w-full py-[6px] px-2 text-sm "
                >
                  <option value="Kemal Ataturk Avenue"></option>
                  <option value="Bangabandhu Avenue">Bangabandhu Avenue</option>
                  <option value="Shahbagh Avenue">Shahbagh Avenue</option>
                  <option value="New Eskaton Road">New Eskaton Road</option>
                  <option value="Bijoy Sarani">Bijoy Sarani</option>
                  <option value="Manik Mia Avenue">Manik Mia Avenue</option>
                  <option value="Pragati Sarani (Mirpur Road)">
                    Pragati Sarani (Mirpur Road)
                  </option>
                  <option value="Elephant Road">Elephant Road</option>
                  <option value="Dhanmondi Road">Dhanmondi Road</option>
                  <option value="Gulshan Avenue">Gulshan Avenue</option>
                  <option value="Banani Road">Banani Road</option>
                  <option value="Mohakhali Flyover">Mohakhali Flyover</option>
                  <option value="Kakrail Road">Kakrail Road</option>
                  <option value="Motijheel C/A (Commercial Area)">
                    Motijheel C/A (Commercial Area)
                  </option>
                  <option value="Farmgate Road">Farmgate Road</option>
                  <option value="Mirpur Road">Mirpur Road</option>
                  <option value="Shyamoli Square">Shyamoli Square</option>
                  <option value="Tejgaon Industrial Area">
                    Tejgaon Industrial Area
                  </option>
                  <option value="Karwan Bazar">Karwan Bazar</option>
                  <option value="Green Road">Green Road</option>
                  <option value="Moghbazar">Moghbazar</option>
                  <option value="Malibagh Chowdhurypara Road">
                    Malibagh Chowdhurypara Road
                  </option>
                  <option value="Bijoynagar Road">Bijoynagar Road</option>
                  <option value="Wari Road">Wari Road</option>
                  <option value="Siddeswari Circular Road">
                    Siddeswari Circular Road
                  </option>
                  <option value="Kakrail Road">Kakrail Road</option>
                  <option value="Satmasjid Road">Satmasjid Road</option>
                  <option value="Mohammadpur Bus Stand Road">
                    Mohammadpur Bus Stand Road
                  </option>
                  <option value="Kazi Nazrul Islam Avenue (Airport Road)">
                    Kazi Nazrul Islam Avenue (Airport Road)
                  </option>
                  <option value="Satrasta Road">Satrasta Road</option>
                  <option value="Siddikbazar Road">Siddikbazar Road</option>
                  <option value="Lalbagh Road">Lalbagh Road</option>
                  <option value="Chankharpul Road">Chankharpul Road</option>
                  <option value="Badda Link Road">Badda Link Road</option>
                  <option value="Niketan Road">Niketan Road</option>
                  <option value="Malibagh Chowdhurypara Road">
                    Malibagh Chowdhurypara Road
                  </option>
                  <option value="Rampura Road">Rampura Road</option>
                  <option value="Siddeshwari Circular Road">
                    Siddeshwari Circular Road
                  </option>
                  <option value="Baily Road">Baily Road</option>
                  <option value="Hatirjheel Link Road">
                    Hatirjheel Link Road
                  </option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div>
                <h1 className="text-[16px] text-secondary my-2 font-semibold font-primary">
                  Area
                </h1>
                <select
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  className="input border w-full py-[6px] px-2 text-sm "
                >
                  <option value="Kemal Ataturk Avenue"></option>
                  <option value="Bangabandhu Avenue">Bangabandhu Avenue</option>
                  <option value="Shahbagh Avenue">Shahbagh Avenue</option>
                  <option value="New Eskaton Road">New Eskaton Road</option>
                  <option value="Bijoy Sarani">Bijoy Sarani</option>
                  <option value="Manik Mia Avenue">Manik Mia Avenue</option>
                  <option value="Pragati Sarani (Mirpur Road)">
                    Pragati Sarani (Mirpur Road)
                  </option>
                  <option value="Elephant Road">Elephant Road</option>
                  <option value="Dhanmondi Road">Dhanmondi Road</option>
                  <option value="Gulshan Avenue">Gulshan Avenue</option>
                  <option value="Banani Road">Banani Road</option>
                  <option value="Mohakhali Flyover">Mohakhali Flyover</option>
                  <option value="Kakrail Road">Kakrail Road</option>
                  <option value="Motijheel C/A (Commercial Area)">
                    Motijheel C/A (Commercial Area)
                  </option>
                  <option value="Farmgate Road">Farmgate Road</option>
                  <option value="Mirpur Road">Mirpur Road</option>
                  <option value="Shyamoli Square">Shyamoli Square</option>
                  <option value="Tejgaon Industrial Area">
                    Tejgaon Industrial Area
                  </option>
                  <option value="Karwan Bazar">Karwan Bazar</option>
                  <option value="Green Road">Green Road</option>
                  <option value="Moghbazar">Moghbazar</option>
                  <option value="Malibagh Chowdhurypara Road">
                    Malibagh Chowdhurypara Road
                  </option>
                  <option value="Bijoynagar Road">Bijoynagar Road</option>
                  <option value="Wari Road">Wari Road</option>
                  <option value="Siddeswari Circular Road">
                    Siddeswari Circular Road
                  </option>
                  <option value="Kakrail Road">Kakrail Road</option>
                  <option value="Satmasjid Road">Satmasjid Road</option>
                  <option value="Mohammadpur Bus Stand Road">
                    Mohammadpur Bus Stand Road
                  </option>
                  <option value="Kazi Nazrul Islam Avenue (Airport Road)">
                    Kazi Nazrul Islam Avenue (Airport Road)
                  </option>
                  <option value="Satrasta Road">Satrasta Road</option>
                  <option value="Siddikbazar Road">Siddikbazar Road</option>
                  <option value="Lalbagh Road">Lalbagh Road</option>
                  <option value="Chankharpul Road">Chankharpul Road</option>
                  <option value="Badda Link Road">Badda Link Road</option>
                  <option value="Niketan Road">Niketan Road</option>
                  <option value="Malibagh Chowdhurypara Road">
                    Malibagh Chowdhurypara Road
                  </option>
                  <option value="Rampura Road">Rampura Road</option>
                  <option value="Siddeshwari Circular Road">
                    Siddeshwari Circular Road
                  </option>
                  <option value="Baily Road">Baily Road</option>
                  <option value="Hatirjheel Link Road">
                    Hatirjheel Link Road
                  </option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div>
                <h1 className="text-[16px] text-secondary my-2 font-semibold font-primary">
                  Shop Location
                </h1>
                <select
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  className="input border w-full py-[6px] px-2 text-sm "
                >
                  <option value="Kemal Ataturk Avenue"></option>
                  <option value="Bangabandhu Avenue">Bangabandhu Avenue</option>
                  <option value="Shahbagh Avenue">Shahbagh Avenue</option>
                  <option value="New Eskaton Road">New Eskaton Road</option>
                  <option value="Bijoy Sarani">Bijoy Sarani</option>
                  <option value="Manik Mia Avenue">Manik Mia Avenue</option>
                  <option value="Pragati Sarani (Mirpur Road)">
                    Pragati Sarani (Mirpur Road)
                  </option>
                  <option value="Elephant Road">Elephant Road</option>
                  <option value="Dhanmondi Road">Dhanmondi Road</option>
                  <option value="Gulshan Avenue">Gulshan Avenue</option>
                  <option value="Banani Road">Banani Road</option>
                  <option value="Mohakhali Flyover">Mohakhali Flyover</option>
                  <option value="Kakrail Road">Kakrail Road</option>
                  <option value="Motijheel C/A (Commercial Area)">
                    Motijheel C/A (Commercial Area)
                  </option>
                  <option value="Farmgate Road">Farmgate Road</option>
                  <option value="Mirpur Road">Mirpur Road</option>
                  <option value="Shyamoli Square">Shyamoli Square</option>
                  <option value="Tejgaon Industrial Area">
                    Tejgaon Industrial Area
                  </option>
                  <option value="Karwan Bazar">Karwan Bazar</option>
                  <option value="Green Road">Green Road</option>
                  <option value="Moghbazar">Moghbazar</option>
                  <option value="Malibagh Chowdhurypara Road">
                    Malibagh Chowdhurypara Road
                  </option>
                  <option value="Bijoynagar Road">Bijoynagar Road</option>
                  <option value="Wari Road">Wari Road</option>
                  <option value="Siddeswari Circular Road">
                    Siddeswari Circular Road
                  </option>
                  <option value="Kakrail Road">Kakrail Road</option>
                  <option value="Satmasjid Road">Satmasjid Road</option>
                  <option value="Mohammadpur Bus Stand Road">
                    Mohammadpur Bus Stand Road
                  </option>
                  <option value="Kazi Nazrul Islam Avenue (Airport Road)">
                    Kazi Nazrul Islam Avenue (Airport Road)
                  </option>
                  <option value="Satrasta Road">Satrasta Road</option>
                  <option value="Siddikbazar Road">Siddikbazar Road</option>
                  <option value="Lalbagh Road">Lalbagh Road</option>
                  <option value="Chankharpul Road">Chankharpul Road</option>
                  <option value="Badda Link Road">Badda Link Road</option>
                  <option value="Niketan Road">Niketan Road</option>
                  <option value="Malibagh Chowdhurypara Road">
                    Malibagh Chowdhurypara Road
                  </option>
                  <option value="Rampura Road">Rampura Road</option>
                  <option value="Siddeshwari Circular Road">
                    Siddeshwari Circular Road
                  </option>
                  <option value="Baily Road">Baily Road</option>
                  <option value="Hatirjheel Link Road">
                    Hatirjheel Link Road
                  </option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div>
                <h1 className="text-[16px] text-secondary my-2 font-semibold font-primary">
                  Shop Name
                </h1>
                <select
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  className="input border w-full py-[6px] px-2 text-sm "
                >
                  <option value="Kemal Ataturk Avenue"></option>
                  <option value="Bangabandhu Avenue">Bangabandhu Avenue</option>
                  <option value="Shahbagh Avenue">Shahbagh Avenue</option>
                  <option value="New Eskaton Road">New Eskaton Road</option>
                  <option value="Bijoy Sarani">Bijoy Sarani</option>
                  <option value="Manik Mia Avenue">Manik Mia Avenue</option>
                  <option value="Pragati Sarani (Mirpur Road)">
                    Pragati Sarani (Mirpur Road)
                  </option>
                  <option value="Elephant Road">Elephant Road</option>
                  <option value="Dhanmondi Road">Dhanmondi Road</option>
                  <option value="Gulshan Avenue">Gulshan Avenue</option>
                  <option value="Banani Road">Banani Road</option>
                  <option value="Mohakhali Flyover">Mohakhali Flyover</option>
                  <option value="Kakrail Road">Kakrail Road</option>
                  <option value="Motijheel C/A (Commercial Area)">
                    Motijheel C/A (Commercial Area)
                  </option>
                  <option value="Farmgate Road">Farmgate Road</option>
                  <option value="Mirpur Road">Mirpur Road</option>
                  <option value="Shyamoli Square">Shyamoli Square</option>
                  <option value="Tejgaon Industrial Area">
                    Tejgaon Industrial Area
                  </option>
                  <option value="Karwan Bazar">Karwan Bazar</option>
                  <option value="Green Road">Green Road</option>
                  <option value="Moghbazar">Moghbazar</option>
                  <option value="Malibagh Chowdhurypara Road">
                    Malibagh Chowdhurypara Road
                  </option>
                  <option value="Bijoynagar Road">Bijoynagar Road</option>
                  <option value="Wari Road">Wari Road</option>
                  <option value="Siddeswari Circular Road">
                    Siddeswari Circular Road
                  </option>
                  <option value="Kakrail Road">Kakrail Road</option>
                  <option value="Satmasjid Road">Satmasjid Road</option>
                  <option value="Mohammadpur Bus Stand Road">
                    Mohammadpur Bus Stand Road
                  </option>
                  <option value="Kazi Nazrul Islam Avenue (Airport Road)">
                    Kazi Nazrul Islam Avenue (Airport Road)
                  </option>
                  <option value="Satrasta Road">Satrasta Road</option>
                  <option value="Siddikbazar Road">Siddikbazar Road</option>
                  <option value="Lalbagh Road">Lalbagh Road</option>
                  <option value="Chankharpul Road">Chankharpul Road</option>
                  <option value="Badda Link Road">Badda Link Road</option>
                  <option value="Niketan Road">Niketan Road</option>
                  <option value="Malibagh Chowdhurypara Road">
                    Malibagh Chowdhurypara Road
                  </option>
                  <option value="Rampura Road">Rampura Road</option>
                  <option value="Siddeshwari Circular Road">
                    Siddeshwari Circular Road
                  </option>
                  <option value="Baily Road">Baily Road</option>
                  <option value="Hatirjheel Link Road">
                    Hatirjheel Link Road
                  </option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>
            <div>
              {" "}
              <button
                className="bk-input-button my-5"
                onClick={handleSearchBox}
              >
                Search By Shop
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchBox;
