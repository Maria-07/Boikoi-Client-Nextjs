import CountUp from "react-countup";

const Count = () => {
  return (
    <div className="lg:w-[60%]  sm:mx-auto py-4 ">
      <div className="lg:absolute border shadow-md sm:mt-[-10%] lg:w-[60%]">
        <div className="bg-white p-8 ">
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-2">
            <div className="p-4 sm:border-r-2 ">
              <h1 className="text-3xl text-primary font-semibold text-center">
                <CountUp start={100} delay={1} duration={2.75} end={300} /> +
              </h1>
              <h2 className="text-lg text-dark text-center my-1">Book Shops</h2>
              <p className="text-sm text-accent text-center">
                a retail establishment where books, magazines, and other reading
                materials are sold to customers
              </p>
            </div>
            <div className="p-4 sm:border-r-2 ">
              <h1 className="text-3xl text-primary font-semibold text-center">
                <CountUp delay={1} duration={2.75} end={50} />K +
              </h1>
              <h2 className="text-lg text-dark text-center my-1">Books</h2>
              <p className="text-sm text-accent text-center">
                books, magazines, and other reading materials
              </p>
            </div>
            <div className="p-4  ">
              <h1 className="text-3xl text-primary font-semibold text-center">
                <CountUp start={200} delay={1} duration={2.75} end={450} /> +
              </h1>
              <h2 className="text-lg text-dark text-center my-1">Customers</h2>
              <p className="text-sm text-accent text-center">
                books, magazines, and other reading materials can buy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
