import { FaPhone } from "react-icons/fa";

import BackButton from "./BackButton";

const categoryMap = {
  villa: "ویلایی",
  apartment: "آپارتمان",
  field: "زمین",
  store: "مغازه",
};

function Details({ data }) {
  const {
    title,
    price,
    category,
    location,
    realState,
    phone,
    description,
    rules,
    amenities,
    constructionDate,
  } = data;
  console.log(constructionDate);

  return (
    <div className="bg-white/10 text-white rounded-xl shadow-lg p-8 mx-auto">
      {/* عنوان */}
      <div className="border-b-2 border-blue-500 pb-4 mb-6 flex items-center justify-between">
        <h1 className="text-4xl font-[500] ">{title}</h1>
        <BackButton />
      </div>

      {/* قیمت و دسته‌بندی */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-500/20 to-blue-300/20 rounded-lg p-4 border border-blue-200/20">
          <p className=" text-lg font-medium mb-1">قیمت :</p>
          <p className="text-3xl font-[600] text-blue-500">
            {Number(price).toLocaleString("fa-IR")} تومان
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-500/20 to-green-300/20 rounded-lg p-4 border border-green-200/20">
          <p className=" text-lg font-medium mb-1">دسته‌بندی :</p>
          <p className="text-3xl font-[600] text-green-500">
            {categoryMap[category] || category}
          </p>
        </div>
      </div>

      {/* آدرس و بنگاه */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50/10 rounded-lg p-4 border border-gray-200/10">
          <p className=" text-lg font-medium mb-2">آدرس :</p>
          <p className=" font-[500] text-lg">{location}</p>
        </div>

        {realState && (
          <div className="bg-gray-50/10 rounded-lg p-4 border border-gray-200/10">
            <p className=" text-lg font-medium mb-2">اطلاعات بنگاه :</p>
            <p className=" font-[500] text-lg">{realState}</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50/10 rounded-lg p-4 border border-gray-200/10">
          <p className=" text-lg font-medium mb-2">اطلاعات تماس :</p>
          <div className="flex justify-between">
            <p className=" font-[500] text-lg flex items-stretch gap-4">
              <FaPhone />
              {phone}
            </p>
          </div>
        </div>

        <div className="bg-gray-50/10 rounded-lg p-4 border border-gray-200/10">
          <p className=" text-lg font-medium mb-2">تاریخ ساخت :</p>
          <p className=" font-[500] text-lg">
            {new Date(constructionDate).toLocaleString("fa-IR").split(",", 1)}
          </p>
        </div>
      </div>

      {/* توضیحات */}
      <div className="mb-6">
        <h2 className="text-2xl font-[500]  mb-3">📝 توضیحات</h2>
        <p className=" leading-relaxed text-lg">{description}</p>
      </div>

      {/* قوانین */}
      {rules && rules.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-[500]  mb-3">⚖️ قوانین</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 ">
            {rules.map((rule, index) => (
              <div
                key={index}
                className="flex  bg-blue-50/10 rounded-lg p-3 border border-blue-200/10"
              >
                <span className="text-blue-500 font-[600] ml-3 mt-1">✓</span>
                <p className="">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* امکانات */}
      {amenities && amenities.length > 0 && (
        <div>
          <h2 className="text-2xl font-[500]  mb-3">✨ امکانات</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex  bg-green-50/10 rounded-lg p-3 border border-green-200/10"
              >
                <span className="text-green-600 font-[600] ml-3">⭐</span>
                <p className="">{amenity}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
