"use client";

import { useRouter } from "next/navigation";
import Card from "./Card";
import api from "@/utils/api";
import toast from "react-hot-toast";
import { useState } from "react";

function DashboardCard({ item }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const deleteHandler = async () => {
    try {
      setLoading(true);
      const res = await api.delete(`advertisement/delete/${item._id}`);
      if (res.status === 200) {
        toast.success("آگهی با موفقیت حذف شد");
        setTimeout(() => {
          router.refresh();
          setLoading(false);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      toast.error("حذف آگهی با خطا مواجه شد");
      setLoading(false);
    }
  };
  const editHandler = () => {
    router.push(`/dashboard/edit/${item._id}`);
  };
  return (
    <div className="bg-white/10 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 text-white p-4 text-lg flex flex-col gap-2">
      <Card item={item} />
      <div className="flex gap-3">
        <button
          className="flex-1 bg-blue-500/80 hover:bg-blue-600/80 font-[400] p-1 rounded-md transition-colors duration-200 flex items-center justify-center gap-1"
          onClick={editHandler}
        >
          ویرایش
        </button>
        <button
          className="flex-1 bg-red-500/80 hover:bg-red-600/80 text-white font-[400] p-1 rounded-md transition-colors duration-200 flex items-center justify-center gap-1 disabled:bg-gray-400/80"
          onClick={deleteHandler}
          disabled={loading}
        >
          {loading ? "در حال حذف..." : "حذف"}
        </button>
      </div>
    </div>
  );
}

export default DashboardCard;
