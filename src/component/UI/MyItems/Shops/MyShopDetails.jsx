import { Image, Table } from "antd";

const MyShopDetails = ({ myShopData }) => {
  // console.log(myShopData);

  const columns = [
    {
      // title: "Features",
      dataIndex: "feature",
      key: "feature",
      width: 100,
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" text-dark font-semibold  text-base">
            {record?.feature}
          </div>
        );
      },
      rowScope: "row",
    },
    {
      // title: "Value",
      dataIndex: "value",
      key: "value",
      width: 200,
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" text-secondary font-medium font-secondary text-base">
            {record?.value}
          </div>
        );
      },
    },
  ];

  const data = [
    {
      key: 1,
      value: myShopData?.shop_number,
      feature: "Shop Number",
    },
    {
      key: 2,
      value: myShopData?.contact_number,
      feature: "Shop Contact",
    },
    {
      key: 3,
      value: myShopData?.location,
      feature: "Shop Location",
    },
    {
      key: 4,
      value: myShopData?.address?.street,
      feature: "Street",
    },
    {
      key: 5,
      value: myShopData?.address?.area,
      feature: "Area",
    },
    {
      key: 6,
      value: myShopData?.address?.city,
      feature: "City",
    },
    {
      key: 7,
      value: myShopData?.shop_weekend,
      feature: "Shop Weekend",
    },
    {
      key: 8,
      value: myShopData?.shop_open_time,
      feature: "Shop Open Time",
    },
    {
      key: 9,
      value: myShopData?.shop_close_time,
      feature: "Shop Open Time",
    },
    {
      key: 10,
      value: myShopData?.book_shop_ratings,
      feature: "Ratings",
    },
  ];

  //   const { contact_number } = myShopData;
  return (
    <div>
      <h1 className="text-3xl text-secondary font-secondary">
        {myShopData?.shop_name}
      </h1>
      <hr className="my-3" />
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
        <div>
          <div>
            <div className="my-5">
              <div>
                <h1 className="text-base text-gray-600 font-semibold border-gray-200 pb-2">
                  # Specific Details
                </h1>
              </div>
              <div className=" sm:overflow-x-hidden overflow-x-scroll">
                <Table
                  pagination={false}
                  columns={columns}
                  dataSource={data}
                  bordered
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-5  my-8">
          <Image
            src={myShopData?.image}
            width={"auto"}
            height={"auto"}
            alt="Picture of the author"
            className=""
          ></Image>
        </div>
      </div>
      <div>
        {" "}
        <h1 className="text-base text-gray-600 font-semibold border-gray-200 pb-2 mt-5">
          # Shop Description
        </h1>
        <hr className="my-3" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          repudiandae magnam fuga possimus facilis amet, nam iure dolor, ipsam
          tenetur tempora ipsum quod debitis sit. Sapiente unde laboriosam
          doloremque maxime?
        </p>
      </div>
    </div>
  );
};

export default MyShopDetails;
