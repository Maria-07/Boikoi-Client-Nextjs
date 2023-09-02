/* eslint-disable react-hooks/rules-of-hooks */
import AdminLayout from "@/component/Layouts/AdminLayout";
import Loader from "@/component/UI/Loader/Loader";
import { useGetAllUserQuery } from "@/redux/features/auth/userApi";
import { Table } from "antd";
import { useEffect } from "react";

const Users = () => {
  //! get all filterable Users
  const {
    data: Users,
    isLoading2,
    isError2,
  } = useGetAllUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 5000,
  });

  useEffect(() => {
    if (!isLoading2 && !isError2) {
      console.log("All Users:", Users?.data);
      console.log("filterShops:", Users);
    }
  }, [isLoading2, isError2, Users]);

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
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      width: 80,
      render: (_, { firstName }) => {
        return <div className=" text-secondary">{firstName}</div>;
      },
      sorter: (a, b) => {
        return a.firstName > b.firstName ? -1 : 1;
      },
      ellipsis: true,
    },
    {
      title: "Middle Name",
      dataIndex: "middleName",
      key: "middleName",
      width: 90,
      onFilter: (value, record) => record.middleName.includes(value),
      sorter: (a, b) => {
        return a.middleName > b.middleName ? -1 : 1;
      },
      ellipsis: true,
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
      width: 90,
      onFilter: (value, record) => record.lastName.includes(value),
      sorter: (a, b) => {
        return a.lastName > b.lastName ? -1 : 1;
      },
      ellipsis: true,
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
      width: 90,
      onFilter: (value, record) => record.contact.includes(value),
      sorter: (a, b) => {
        return a.contact > b.contact ? -1 : 1;
      },
      ellipsis: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 120,
      onFilter: (value, record) => record.email.includes(value),
      sorter: (a, b) => {
        return a.email > b.email ? -1 : 1;
      },
      ellipsis: true,
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      width: 90,
      onFilter: (value, record) => record.role.includes(value),
      sorter: (a, b) => {
        return a.role > b.role ? -1 : 1;
      },
      ellipsis: true,
    },
  ];
  return (
    <div className="min-h-[100vh]">
      <h1 className="text-lg font-semibold my-2 text-primary">All Users</h1>
      <Table
        pagination={false}
        rowKey={(record) => record.id}
        size="small"
        bordered
        className="table-striped-rows text-xs font-normal"
        columns={columns}
        dataSource={Users?.data}
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

export default Users;

Users.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
