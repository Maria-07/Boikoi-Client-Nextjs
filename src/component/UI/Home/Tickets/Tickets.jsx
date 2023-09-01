const Tickets = () => {
  return (
    <div className="flex items-center justify-center mb-40">
      <div className="">
        <h2 className="text-sm text-gray-500 my-3 text-center">
          Let us know you question
        </h2>
        <h2 className="text-3xl font-secondary text-dark my-3 text-center">
          Join Our Newsletter
        </h2>
        <p className="text-base font-medium text-gray-600">
          Sign-up to be the first to hear about exclusive deals, special offers
          and upcoming collections
        </p>
        <div className="flex items-center sm:flex-nowrap flex-wrap gap-5 p-10">
          <input
            type="text"
            className="border w-full h-[42px] border-dark rounded-sm"
          />{" "}
          <button className="border text-base px-3 py-2 bg-dark text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
