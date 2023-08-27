import { Select } from "antd";
import { useEffect, useState } from "react";

const CustomDefaultSearchOption = ({ item, option, dValue }) => {
  const [items, setItems] = useState([]);
  // console.log("item", item);

  useEffect(() => {
    const uniqueArray = [...new Set(item)];
    if (uniqueArray) {
      setItems(uniqueArray);
    }
  }, [item]);

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
        defaultValue={dValue}
        onChange={onChange}
        onSearch={onSearch}
        options={items.map((item) => ({
          label: item,
          value: item,
        }))}
      />
    </div>
  );
};

export default CustomDefaultSearchOption;
