import React from "react";
import MyInput from "../UI/MyInput/MyInput";
import MySelect from "../UI/MySelect/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Поиск..."
      />
      <MySelect
        optionValue={filter.sort}
        onChange={(value) => setFilter({ ...filter, sort: value })}
        defaultOptionName="Сортировка по"
        options={[
          {
            name: "По названию",
            value: "title",
          },
          {
            name: "По описанию",
            value: "body",
          },
        ]}
      />
    </div>
  );
};

export default PostFilter;
