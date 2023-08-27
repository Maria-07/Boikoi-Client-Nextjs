import RootLayout from "@/component/Layouts/RootLayout";
import RegularBookCard from "@/component/UI/Books/RegularBooks/RegularBookCard";
import { Breadcrumb, Checkbox, Pagination, Slider } from "antd";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsBook } from "react-icons/bs";

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
    <div>
      <div className="bg-popover py-24">
        <h1 className="text-center text-secondary font-semibold text-xl">
          Find Your Books
        </h1>
      </div>
      <div className="lg:w-[80%] lg:mx-auto py-4 px-4">
        <div className="my-5">
          {" "}
          <Breadcrumb
            items={[
              {
                href: "/",
                title: (
                  <AiOutlineHome className="hover:text-primary font-semibold text-lg mt-[2px]" />
                ),
              },
              {
                title: (
                  <button
                    className={
                      currentRoute === "/books"
                        ? "text-primary flex items-center gap-2 hover:text-primary font-semibold"
                        : "flex items-center gap-2 hover:text-primary font-semibold"
                    }
                  >
                    <BsBook className="  text-lg" />
                    <span>Books</span>
                  </button>
                ),
              },
            ]}
          />
        </div>

        <div className="my-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  gap-5 ">
            <div className="border min-h-[100vh] shadow-md px-5 py-7">
              <div className="mb-5">
                <h1 className="text-[15px] text-dark my-2 font-semibold">
                  Author Name
                </h1>
                <select
                  onChange={(e) => {
                    setStreet(e.target.value);
                  }}
                  className="input border w-full py-[6px] px-2 text-sm "
                >
                  <option value=""></option>
                  <option value="Kemal Ataturk Avenue">
                    Kemal Ataturk Avenue
                  </option>
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
              <div className="mb-5">
                <h1 className="text-[15px] text-dark my-2 font-semibold">
                  Publisher Name
                </h1>
                <select
                  onChange={(e) => {
                    setArea(e.target.value);
                  }}
                  className="input border w-full py-[6px] px-2 text-sm "
                >
                  <option value="Uttara">Uttara</option>
                  <option value="Gulshan">Gulshan</option>
                  <option value="Banani">Banani</option>
                  <option value="Dhanmondi">Dhanmondi</option>
                  <option value="Mohakhali">Mohakhali</option>
                  <option value="Mirpur">Mirpur</option>
                  <option value="Motijheel">Motijheel</option>
                  <option value="Mohammadpur">Mohammadpur</option>
                  <option value="Malibagh">Malibagh</option>
                  <option value="Farmgate">Farmgate</option>
                  <option value="Karwan Bazar">Karwan Bazar</option>
                  <option value="Jatrabari">Jatrabari</option>
                  <option value="Khilgaon">Khilgaon</option>
                  <option value="Badda">Badda</option>
                  <option value="Pallabi">Pallabi</option>
                  <option value="Shantinagar">Shantinagar</option>
                  <option value="Azimpur">Azimpur</option>
                  <option value="Rampura">Rampura</option>
                  <option value="Savar">Savar</option>
                  <option value="Baridhara">Baridhara</option>
                  <option value="Basabo">Basabo</option>
                  <option value="Jigatola">Jigatola</option>
                  <option value="Kamalapur">Kamalapur</option>
                  <option value="Lalmatia">Lalmatia</option>
                  <option value="Niketan">Niketan</option>
                  <option value="Shyamoli">Shyamoli</option>
                  <option value="Tikatuli">Tikatuli</option>
                  <option value="Tongi">Tongi</option>
                  <option value="Wari">Wari</option>
                  <option value="Tejgaon">Tejgaon</option>
                  <option value="Mohakhali DOHS">Mohakhali DOHS</option>
                  <option value="Agargaon Mirpur DOHS">
                    Agargaon Mirpur DOHS
                  </option>
                  <option value="Baridhara DOHS">Baridhara DOHS</option>
                  <option value="Adabar">Adabar</option>
                  <option value="Rayer Bazar">Rayer Bazar</option>
                  <option value="Baily Road">Baily Road</option>
                  <option value="Mohammadpur Housing Estate">
                    Mohammadpur Housing Estate
                  </option>
                  <option value="Sher-e-Bangla Nagar">
                    Sher-e-Bangla Nagar
                  </option>
                  <option value="Segun Bagicha">Segun Bagicha</option>
                  <option value="Shewrapara">Shewrapara</option>
                  <option value="Banasree">Banasree</option>
                  <option value="Merul Badda">Merul Badda</option>
                  <option value="Hazaribagh">Hazaribagh</option>
                  <option value="Pallabi Housing Estate">
                    Pallabi Housing Estate
                  </option>
                  <option value="Nikunja">Nikunja</option>
                  <option value="Wari-Gulistan">Wari-Gulistan</option>
                  <option value="Rajabazar">Rajabazar</option>
                  <option value="Mugda">Mugda</option>
                  <option value="Shankar">Shankar</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="mb-5">
                <h1 className="text-[15px] text-dark my-2 font-semibold">
                  Genre
                </h1>
                <select
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  className="input border w-full py-[6px] px-2 text-sm "
                >
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chittagong (Chattogram)">
                    Chittagong (Chattogram)
                  </option>
                  <option value="Khulna">Khulna</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Barisal">Barisal</option>
                  <option value="Rangpur">Rangpur</option>
                  <option value="Comilla (Cumilla)">Comilla (Cumilla)</option>
                  <option value="Narayanganj">Narayanganj</option>
                  <option value="Mymensingh">Mymensingh</option>
                  <option value="Gazipur">Gazipur</option>
                  <option value="Jessore (Jashore)">Jessore (Jashore)</option>
                  <option value="Narsingdi">Narsingdi</option>
                  <option value="Dinajpur">Dinajpur</option>
                  <option value="Bogra">Bogra</option>
                  <option value="Tangail">Tangail</option>
                  <option value="Faridpur">Faridpur</option>
                  <option value="Pabna">Pabna</option>
                  <option value="Cox's Bazar">Cox&apos;s Bazar</option>
                  <option value="Jamalpur">Jamalpur</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="mb-5">
                <h1 className="text-[15px] text-dark my-2 font-semibold">
                  Class Level
                </h1>
                <select
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  className="input border w-full py-[6px] px-2 text-sm "
                >
                  <option value=""></option>
                  <option value="Nilkhet Book Market">
                    Nilkhet Book Market
                  </option>
                  <option value="BanglaBazar Book Market">
                    BanglaBazar Book Market
                  </option>
                  <option value="Aziz Super Market">Aziz Super Market</option>
                  <option value="Rokomari Book Store">
                    Rokomari Book Store
                  </option>
                  <option value="Prothoma Prokashon Bookstores">
                    Prothoma Prokashon Bookstores
                  </option>
                  <option value="Pathak Shamabesh Center">
                    Pathak Shamabesh Center
                  </option>
                  <option value="Batighar">Batighar</option>
                  <option value="Jonaki Boi Ghar">Jonaki Boi Ghar</option>
                  <option value="Bookworm">Bookworm</option>
                  <option value="Bookshelf">Bookshelf</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="mb-5">
                <h1 className="text-[15px] text-dark my-2 font-semibold">
                  Faculty
                </h1>
                <select
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  className="input border w-full py-[6px] px-2 text-sm "
                >
                  <option value=""></option>
                  <option value="Nilkhet Book Market">
                    Nilkhet Book Market
                  </option>
                  <option value="BanglaBazar Book Market">
                    BanglaBazar Book Market
                  </option>
                  <option value="Aziz Super Market">Aziz Super Market</option>
                  <option value="Rokomari Book Store">
                    Rokomari Book Store
                  </option>
                  <option value="Prothoma Prokashon Bookstores">
                    Prothoma Prokashon Bookstores
                  </option>
                  <option value="Pathak Shamabesh Center">
                    Pathak Shamabesh Center
                  </option>
                  <option value="Batighar">Batighar</option>
                  <option value="Jonaki Boi Ghar">Jonaki Boi Ghar</option>
                  <option value="Bookworm">Bookworm</option>
                  <option value="Bookshelf">Bookshelf</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="mb-5">
                <h1 className="text-[15px] text-dark my-2 font-semibold">
                  Last Edition
                </h1>
                <select
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  className="input border w-full py-[6px] px-2 text-sm "
                >
                  <option value=""></option>
                  <option value="Nilkhet Book Market">
                    Nilkhet Book Market
                  </option>
                  <option value="BanglaBazar Book Market">
                    BanglaBazar Book Market
                  </option>
                  <option value="Aziz Super Market">Aziz Super Market</option>
                  <option value="Rokomari Book Store">
                    Rokomari Book Store
                  </option>
                  <option value="Prothoma Prokashon Bookstores">
                    Prothoma Prokashon Bookstores
                  </option>
                  <option value="Pathak Shamabesh Center">
                    Pathak Shamabesh Center
                  </option>
                  <option value="Batighar">Batighar</option>
                  <option value="Jonaki Boi Ghar">Jonaki Boi Ghar</option>
                  <option value="Bookworm">Bookworm</option>
                  <option value="Bookshelf">Bookshelf</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="mb-5">
                <h1 className="text-[15px] text-dark my-2 font-semibold">
                  Price Range
                </h1>
                <div className=" w-full py-[6px]  text-sm ">
                  {" "}
                  <Slider
                    range
                    step={10}
                    defaultValue={[20, 50]}
                    onChange={onChange}
                    onAfterChange={onAfterChange}
                  />
                </div>
              </div>
              <div className="mb-5">
                <h1 className="text-[15px] text-dark my-2 font-semibold">
                  Price Range
                </h1>
                <div className=" w-full py-[6px]  text-sm ">
                  <Checkbox.Group
                    options={plainOptions}
                    // defaultValue={["Pear"]}
                    onChange={handleStock}
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-4 border shadow-md px-3 py-5">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 ">
                {demoData?.map((book, i) => (
                  <RegularBookCard book={book} key={i}></RegularBookCard>
                ))}
              </div>
              <div className="my-10 flex items-center justify-center">
                <Pagination defaultCurrent={1} total={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;

BookPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
