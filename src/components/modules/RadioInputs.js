import React from "react";

function RadioInputs({ data, setData }) {
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  return (
    <div className="bg-blue-300/30 flex justify-around items-center gap-10 rounded-md [&>div]:flex [&>div]:items-center [&>div]:gap-1  [&>div]:p-2 ">
      <div>
        <label htmlFor="villa">ویلایی</label>
        <input
          type="radio"
          name="category"
          id="villa"
          value="villa"
          checked={data.category === "villa"}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label htmlFor="apartment">آپارتمان</label>
        <input
          type="radio"
          name="category"
          id="apartment"
          value="apartment"
          checked={data.category === "apartment"}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label htmlFor="store">مغازه</label>
        <input
          type="radio"
          name="category"
          id="store"
          value="store"
          checked={data.category === "store"}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label htmlFor="field">زمین</label>
        <input
          type="radio"
          name="category"
          id="field"
          value="field"
          checked={data.category === "field"}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
}

export default RadioInputs;
