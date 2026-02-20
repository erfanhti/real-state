import { useState } from "react";
import { MdAddToPhotos } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

function TextList({ data, setData, title, name }) {
  const addHandler = () => {
    setData({ ...data, [name]: [...data[name], ""] });
  };

  const changeHandler = (event, index) => {
    const { value } = event.target;

    const newList = [...data[name]];
    newList[index] = value;
    setData({ ...data, [name]: newList });
  };

  const deleteHandler = (index) => {
    const newList = [...data[name]];
    newList.splice(index, 1);
    setData({ ...data, [name]: newList });
  };
  return (
    <div>
      <label>{title}</label>
      {data[name].map((item, index) => (
        <div key={index} className="flex gap-3 items-center mb-2">
          <input
            type="text"
            value={item}
            onChange={(event) => changeHandler(event, index)}
            className="text-gray-900 p-2 rounded-md bg-slate-300 text-lg"
          />
          <RiDeleteBinLine
            onClick={() => deleteHandler(index)}
            className="cursor-pointer text-3xl text-red-500"
          />
        </div>
      ))}
      <button
        onClick={addHandler}
        className="bg-blue-500 flex items-center gap-2 py-1 px-2 rounded-lg mt-3 text-lg"
      >
        افزودن
        <MdAddToPhotos />
      </button>
    </div>
  );
}

export default TextList;
