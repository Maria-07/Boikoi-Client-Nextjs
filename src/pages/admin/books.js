/* eslint-disable react-hooks/rules-of-hooks */
import AdminLayout from "@/component/Layouts/AdminLayout";
import Loader from "@/component/UI/Loader/Loader";
import { useGetAllBooksQuery } from "@/redux/features/book/bookApi";
import { Table } from "antd";
import { useEffect } from "react";

const books = () => {
  //! get all filterable Books
  const {
    data: books,
    isLoading2,
    isError2,
  } = useGetAllBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 5000,
  });

  useEffect(() => {
    if (!isLoading2 && !isError2) {
      console.log("All Books:", books?.data);
      console.log("filterShops:", books);
    }
  }, [isLoading2, isError2, books]);

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
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: 130,
      render: (_, { title }) => {
        return <div className=" text-secondary">{title}</div>;
      },
      sorter: (a, b) => {
        return a.title > b.title ? -1 : 1;
      },
      ellipsis: true,
    },
    {
      title: "Author Name",
      dataIndex: "author_name",
      key: "author_name",
      width: 90,
      onFilter: (value, record) => record.author_name.includes(value),
      sorter: (a, b) => {
        return a.author_name > b.author_name ? -1 : 1;
      },
      ellipsis: true,
    },
    {
      title: "Publisher Name",
      dataIndex: "publisher_name",
      key: "publisher_name",
      width: 90,
      onFilter: (value, record) => record.publisher_name.includes(value),
      sorter: (a, b) => {
        return a.publisher_name > b.publisher_name ? -1 : 1;
      },
      ellipsis: true,
    },
    {
      title: "Genre",
      dataIndex: "genre",
      key: "genre",
      width: 90,
      onFilter: (value, record) => record.genre.includes(value),
      sorter: (a, b) => {
        return a.genre > b.genre ? -1 : 1;
      },
      ellipsis: true,
    },

    {
      title: "Class Level",
      dataIndex: "class_level",
      key: "class_level",
      width: 90,
      onFilter: (value, record) => record.class_level.includes(value),
      sorter: (a, b) => {
        return a.class_level > b.class_level ? -1 : 1;
      },
      ellipsis: true,
    },
    {
      title: "Faculty Name",
      dataIndex: "faculty_name",
      key: "faculty_name",
      width: 90,
      onFilter: (value, record) => record.faculty_name.includes(value),
      sorter: (a, b) => {
        return a.faculty_name > b.faculty_name ? -1 : 1;
      },
      ellipsis: true,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      width: 90,
      onFilter: (value, record) => record.quantity.includes(value),
      sorter: (a, b) => {
        return a.quantity > b.quantity ? -1 : 1;
      },
      ellipsis: true,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 130,
      render: (_, { price }) => {
        return <div className=" text-secondary">{price}</div>;
      },
      sorter: (a, b) => {
        return a.price > b.price ? -1 : 1;
      },
      ellipsis: true,
    },
    {
      title: "Last Edition",
      dataIndex: "Last_edition",
      key: "Last_edition",
      width: 90,
      onFilter: (value, record) => record.Last_edition.includes(value),
      sorter: (a, b) => {
        return a.Last_edition > b.Last_edition ? -1 : 1;
      },
      ellipsis: true,
    },
  ];
  return (
    <div className="min-h-[100vh]">
      <h1 className="text-lg font-semibold my-2 text-primary">All Books</h1>
      <Table
        pagination={false}
        rowKey={(record) => record.id}
        size="small"
        bordered
        className="table-striped-rows text-xs font-normal"
        columns={columns}
        dataSource={books?.data}
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

export default books;

books.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
