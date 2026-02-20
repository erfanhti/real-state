"use client";

import { useState, useEffect } from "react";
import DatePickerJalali from "@/modules/DatePicker";
import RadioInputs from "@/modules/RadioInputs";
import TextInputs from "@/modules/TextInputs";
import TextList from "@/modules/TextList";
import api from "@/utils/api";
import toast from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

function AddAdvertisementPage({ advertisement }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    category: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    rules: [],
    amenities: [],
  });

  useEffect(() => {
    if (advertisement) {
      setData(advertisement);
    }
  }, []);

  const postHandler = async () => {
    try {
      setLoading(true);
      const res = await api.post("/advertisement", data);
      if (res.status === 201) toast.success(res.data.message);
      setData({
        title: "",
        description: "",
        location: "",
        phone: "",
        category: "",
        price: "",
        realState: "",
        constructionDate: new Date(),
        rules: [],
        amenities: [],
      });
      setTimeout(() => {
        setLoading(false);
        window.location.replace("/dashboard/myadvertisements");
      }, 1500);
    } catch (error) {
      setLoading(false);
      if (error.status) toast.error(error.data.error);
    }
  };

  const editHandler = async () => {
    try {
      setLoading(true);
      const res = await api.patch("/advertisement", data);
      if (res.status === 201) toast.success(res.data.message);
      setData({
        title: "",
        description: "",
        location: "",
        phone: "",
        category: "",
        price: "",
        realState: "",
        constructionDate: new Date(),
        rules: [],
        amenities: [],
      });
      setTimeout(() => {
        setLoading(false);
        window.location.replace("/dashboard/myadvertisements");
      }, 1500);
    } catch (error) {
      setLoading(false);
      if (error.status) toast.error(error.data.error);
    }
  };

  return (
    <div className="p-4 flex flex-col gap-4 w-2/3 mx-auto">
      {advertisement ? (
        <h1 className="text-center text-2xl font-[400]">ویرایش آگهی</h1>
      ) : (
        <h1 className="text-center text-2xl font-[400]">ثبت آگهی جدید</h1>
      )}
      <TextInputs
        data={data}
        setData={setData}
        name="title"
        label="عنوان آگهی"
      />
      <TextInputs
        data={data}
        setData={setData}
        name="location"
        label="آدرس آگهی"
      />
      <TextInputs
        data={data}
        setData={setData}
        name="phone"
        type="number"
        label="شماره تلفن"
      />
      <TextInputs
        data={data}
        setData={setData}
        name="realState"
        label="نام بنگاه آگهی دهنده"
      />
      <TextInputs
        data={data}
        setData={setData}
        name="price"
        type="number"
        label="قیمت  (به تومان)"
      />
      <TextInputs
        data={data}
        setData={setData}
        name="description"
        label="توضیحات آگهی"
        textArea={true}
      />
      <div>
        <label>دسته بندی</label>
        <RadioInputs data={data} setData={setData} />
      </div>
      <DatePickerJalali data={data} setData={setData} />
      <div className="flex justify-between">
        <TextList
          data={data}
          setData={setData}
          title="امکانات رفاهی"
          name="amenities"
        />
        <TextList
          data={data}
          setData={setData}
          title="قوانین ملک"
          name="rules"
        />
      </div>

      {loading ? (
        <div className="flex justify-center">
          <ThreeDots visible={true} height="70" width="70" color="#fbbf24" />
        </div>
      ) : advertisement ? (
        <div className="flex gap-3 mt-3 font-[500] text-xl">
          <button
            className="bg-amber-500 p-2 hover:bg-amber-600 rounded-lg w-1/2 transition-all duration-200"
            onClick={() => editHandler()}
            disabled={loading}
          >
            ویرایش آگهی
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 p-2 rounded-lg w-1/2 transition-all duration-200"
            onClick={() =>
              window.location.replace("/dashboard/myadvertisements")
            }
          >
            انصراف
          </button>
        </div>
      ) : (
        <div className="flex gap-3 mt-3 font-[500] text-xl">
          <button
            className="bg-amber-500 p-2 hover:bg-amber-600 rounded-lg w-1/2 transition-all duration-200"
            onClick={() => postHandler()}
            disabled={loading}
          >
            ثبت آگهی
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 p-2 rounded-lg w-1/2 transition-all duration-200"
            onClick={() =>
              window.location.replace("/dashboard/myadvertisements")
            }
          >
            انصراف
          </button>
        </div>
      )}
    </div>
  );
}

export default AddAdvertisementPage;
