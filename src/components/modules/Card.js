import Link from "next/link";
import { GiHouse } from "react-icons/gi";
import { MdApartment } from "react-icons/md";
import { LuLandPlot } from "react-icons/lu";
import { IoStorefront } from "react-icons/io5";
import PublishAction from "./PublishAction";

function Card({ item, publishCard }) {
  const { category, title, price, location, _id } = item;
  return (
    <div className="flex flex-col gap-2">
      {category === "villa" && <GiHouse size="25" />}
      {category === "apartment" && <MdApartment size="25" />}
      {category === "field" && <LuLandPlot size="25" />}
      {item.category === "store" && <IoStorefront size="25" />}
      <div className="flex gap-2 items-center font-[400] truncate">
        <label className="text-lg font-[400]">عنوان : </label>
        <p>{title}</p>
      </div>

      <div className="flex gap-2 items-center  font-semibold text-green-500">
        <label className="text-lg font-[400]">قیمت : </label>
        <p>{price.toLocaleString("fa-IR")} تومان</p>
      </div>

      <div className="flex gap-2 items-center">
        <label className="text-lg font-[400]">موقعیت : </label>
        <p>{location}</p>
      </div>

      <Link
        href={`/advertisements/${_id}`}
        className="block text-blue-400 hover:text-blue-300  font-[400]"
      >
        مشاهده جزییات آگهی
      </Link>
      {publishCard && (
        <PublishAction id={JSON.parse(JSON.stringify(item._id))} />
      )}
    </div>
  );
}

export default Card;
