import { BiSolidCategoryAlt } from "react-icons/bi";
import Link from "next/link";

function AddsSidebar({ searchParams }) {
  return (
    <div className="w-1/5 p-6 bg-white/10 rounded-2xl backdrop-blur-sm shadow-lg h-fit">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-stretch text-xl">
          <BiSolidCategoryAlt color="#3b82f6" />
          <p className="font-[400] mb-2 text-white drop-shadow">
            دسته بندی آگهی ها
          </p>
        </div>
        <Link
          className={`p-3 rounded-lg hover:bg-white/25 cursor-pointer transition-all duration-200 hover:shadow-md text-white/90 hover:text-white text-lg ${
            searchParams === "all" ? "bg-white/25" : ""
          }`}
          href="/adds"
        >
          همه
        </Link>
        <Link
          className={`p-3 rounded-lg hover:bg-white/25 cursor-pointer transition-all duration-200 hover:shadow-md text-white/90 hover:text-white text-lg ${
            searchParams === "villa" ? "bg-white/25" : ""
          }`}
          href="/adds?category=villa"
        >
          ویلایی
        </Link>
        <Link
          className={`p-3 rounded-lg hover:bg-white/25 cursor-pointer transition-all duration-200 hover:shadow-md text-white/90 hover:text-white text-lg ${
            searchParams === "apartment" ? "bg-white/25" : ""
          }`}
          href="/adds?category=apartment"
        >
          آپارتمان
        </Link>
        <Link
          className={`p-3 rounded-lg hover:bg-white/25 cursor-pointer transition-all duration-200 hover:shadow-md text-white/90 hover:text-white text-lg ${
            searchParams === "field" ? "bg-white/25" : ""
          }`}
          href="/adds?category=field"
        >
          زمین
        </Link>
        <Link
          className={`p-3 rounded-lg hover:bg-white/25 cursor-pointer transition-all duration-200 hover:shadow-md text-white/90 hover:text-white text-lg ${
            searchParams === "store" ? "bg-white/25" : ""
          }`}
          href="/adds?category=store"
        >
          مغازه
        </Link>
      </div>
    </div>
  );
}

export default AddsSidebar;
