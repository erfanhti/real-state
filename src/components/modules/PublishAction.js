"use client";

import api from "@/utils/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

function PublishAction({ id }) {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const router = useRouter();

  const publishHandler = async () => {
    try {
      setLoading(true);
      const res = await api.patch(`/advertisement/publish/${id}`);
      if (res.status === 200) {
        toast.success("آگهی با موفقیت منتشر شد");
        setTimeout(() => {
          router.refresh();
          setLoading(false);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      toast.error("انتشار آگهی با خطا مواجه شد");
      setLoading(false);
    }
  };

  const deleteHandler = async () => {
    try {
      setLoading2(true);
      const res = await api.delete(`advertisement/delete/${id}`);
      if (res.status === 200) {
        toast.success("آگهی با موفقیت حذف شد");
        setTimeout(() => {
          router.refresh();
          setLoading2(false);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      toast.error("حذف آگهی با خطا مواجه شد");
      setLoading2(false);
    }
  };
  return (
    <div className="flex gap-3 [&_button]:p-1 [&_button]:rounded-md [&_button]:w-1/2 [&_button]:text-lg [&_button]:font-[400]">
      <button
        onClick={publishHandler}
        className="bg-blue-500/80 hover:bg-blue-600/80 transition-colors duration-200 disabled:bg-gray-400/80"
        disabled={loading}
      >
        {loading ? "در حال انتشار" : "انتشار"}
      </button>
      <button
        onClick={deleteHandler}
        className="bg-red-500/80 hover:bg-red-600/80 transition-colors duration-200 disabled:bg-gray-400/80"
        disabled={loading2}
      >
        {loading2 ? "در حال حذف" : "حذف"}
      </button>
    </div>
  );
}

export default PublishAction;
