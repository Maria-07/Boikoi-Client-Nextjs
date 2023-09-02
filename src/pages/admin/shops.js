/* eslint-disable react-hooks/rules-of-hooks */
import AdminLayout from "@/component/Layouts/AdminLayout";
import Loader from "@/component/UI/Loader/Loader";
import { useGetAllShopQuery } from "@/redux/features/shop/shopApi";
import { Table } from "antd";
import { useEffect } from "react";

const shops = () => {
  //! get all filterable Shops
  const {
    data: shops,
    isLoading2,
    isError2,
  } = useGetAllShopQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 5000,
  });

  useEffect(() => {
    if (!isLoading2 && !isError2) {
      console.log("filterShops:", shops);
    }
  }, [isLoading2, isError2, shops]);

  if (isLoading2) {
    return <Loader></Loader>;
  }

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(selectedRowKeys);
    },
  };

  const columns = [
    {
      title: "Shop Name",
      dataIndex: "shop_name",
      key: "shop_name",
      width: 130,
      render: (_, { shop_name }) => {
        return <div className=" text-secondary">{shop_name}</div>;
      },
      sorter: (a, b) => {
        return a.shop_name > b.shop_name ? -1 : 1;
      },
      ellipsis: true,
    },
    {
      title: "Shop Number",
      dataIndex: "shop_number",
      key: "shop_number",
      width: 90,
      onFilter: (value, record) => record.shop_number.includes(value),
      sorter: (a, b) => {
        return a.shop_number > b.shop_number ? -1 : 1;
      },
      ellipsis: true,
    },
    {
      title: "Contact Number",
      dataIndex: "contact_number",
      key: "contact_number",
      width: 90,
      onFilter: (value, record) => record.contact_number.includes(value),
      sorter: (a, b) => {
        return a.contact_number > b.contact_number ? -1 : 1;
      },
      ellipsis: true,
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      width: 90,
      onFilter: (value, record) => record.location.includes(value),
      sorter: (a, b) => {
        return a.location > b.location ? -1 : 1;
      },
      ellipsis: true,
    },
    {
      title: "City",
      dataIndex: "address",
      key: "address",
      width: 90,
      render: (_, record) => {
        console.log(record);
        return <div className=" text-secondary">{record?.address?.city}</div>;
      },
      onFilter: (value, record) => record.address.city.includes(value),
      sorter: (a, b) => {
        return a.address.city > b.address.city ? -1 : 1;
      },
      ellipsis: true,
    },
    {
      title: "Area",
      dataIndex: "address",
      key: "address",
      width: 90,
      render: (_, record) => {
        console.log(record);
        return <div className=" text-secondary">{record?.address?.area}</div>;
      },
      onFilter: (value, record) => record.address.area.includes(value),
      sorter: (a, b) => {
        return a.address.area > b.address.area ? -1 : 1;
      },
      ellipsis: true,
    },
    {
      title: "Street",
      dataIndex: "address",
      key: "address",
      width: 90,
      render: (_, record) => {
        console.log(record);
        return <div className=" text-secondary">{record?.address?.street}</div>;
      },
      onFilter: (value, record) => record.address.street.includes(value),
      sorter: (a, b) => {
        return a.address.street > b.address.street ? -1 : 1;
      },
      ellipsis: true,
    },
    {
      title: "Shop Weekend",
      dataIndex: "shop_weekend",
      key: "shop_weekend",
      width: 90,
      onFilter: (value, record) => record.shop_weekend.includes(value),
      sorter: (a, b) => {
        return a.shop_weekend > b.shop_weekend ? -1 : 1;
      },
      ellipsis: true,
    },
    {
      title: "Open Time",
      dataIndex: "shop_open_time",
      key: "shop_open_time",
      width: 90,
      onFilter: (value, record) => record.shop_open_time.includes(value),
      sorter: (a, b) => {
        return a.shop_open_time > b.shop_open_time ? -1 : 1;
      },
      ellipsis: true,
    },
    {
      title: "Close Time",
      dataIndex: "shop_close_time",
      key: "shop_close_time",
      width: 90,
      onFilter: (value, record) => record.shop_close_time.includes(value),
      sorter: (a, b) => {
        return a.shop_close_time > b.shop_close_time ? -1 : 1;
      },
      ellipsis: true,
    },
  ];
  return (
    <div className="min-h-[100vh]">
      <h1 className="text-lg font-semibold my-2 text-primary">All Shops</h1>
      <Table
        pagination={false}
        rowKey={(record) => record.id}
        size="small"
        bordered
        className="table-striped-rows text-xs font-normal"
        columns={columns}
        dataSource={shops?.data}
        rowSelection={{
          ...rowSelection,
        }}
        scroll={{
          y: 650,
        }}
        // onChange={handleChange}
      />
    </div>
  );
};

export default shops;

shops.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
