import genre from "../../../../assets/img/Bibliophile-bro.png";
import location from "../../../../assets/img/location.png";
import author from "../../../../assets/img/author.png";
import bookshop from "../../../../assets/img/Bookshop-cuate.png";
import Class from "../../../../assets/img/Formula-amico.png";

import Category from "./Category";

const catagoriesData = [
  {
    name: "By Location",
    img: location,
  },
  {
    name: "By Bookshop",
    img: bookshop,
  },
  {
    name: "By Author Name",
    img: author,
  },
  {
    name: "By Genre",
    img: genre,
  },
  {
    name: "By Class Level",
    img: Class,
  },
];

const Categories = () => {
  return (
    <div className="bg-popover my-24">
      <div className="  py-4  px-4">
        <h1 className="text-center font-semibold text-2xl mt-10 text-dark">
          CATE<span className="text-primary">GO</span>RIES
        </h1>
        <p className="text-lg font-secondary text-accent text-center lg:px-[200px] mb-2">
          Find your nearby shops & Books
        </p>
      </div>
      <div className="  p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5  gap-5 mt-16 mb-10">
          {catagoriesData?.map((category, i) => (
            <Category category={category} key={i}></Category>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
