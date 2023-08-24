import { Button, Divider, Input, Select, Space } from "antd";
import { useEffect, useRef, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

let index = 0;

const CustomOptionAntd = ({ item, option }) => {
  const [items, setItems] = useState([]);
  // console.log("item", item);

  useEffect(() => {
    const uniqueArray = [...new Set(item)];
    if (uniqueArray) {
      setItems(uniqueArray);
    }
    // console.log("uniqueArray", uniqueArray);
  }, [item]);
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  //! handlers
  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  const onChange = (value) => {
    console.log(`selected ${value}`);
    option(value);
  };

  return (
    <div>
      {" "}
      <Select
        showSearch
        style={{
          width: "100%",
        }}
        onChange={onChange}
        onSearch={onSearch}
        // placeholder="custom dropdown render"
        dropdownRender={(menu) => (
          <>
            {menu}
            <Divider
              style={{
                margin: "8px 0",
              }}
            />
            <Space
              style={{
                padding: "0 8px 4px",
              }}
            >
              <Input
                placeholder="Please enter item"
                ref={inputRef}
                value={name}
                onChange={onNameChange}
              />
              <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                Add item
              </Button>
            </Space>
          </>
        )}
        options={items.map((item) => ({
          label: item,
          value: item,
        }))}
      />
    </div>
  );
};

export default CustomOptionAntd;
