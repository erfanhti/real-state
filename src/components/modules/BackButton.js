"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoMdArrowRoundBack } from "react-icons/io";
import { LuShare2 } from "react-icons/lu";
import toast from "react-hot-toast";

function BackButton() {
  const [url, setUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <div className="text-4xl flex items-center gap-6">
      <div className="cursor-pointer text-blue-400 hover:text-blue-500 transition-colors duration-200 text-3xl">
        <CopyToClipboard text={url}>
          <LuShare2 onClick={()=>toast.success("لینک آگهی کپی شد !")}/>
        </CopyToClipboard>
      </div>
      <div
        className="cursor-pointer text-blue-400 hover:text-blue-500 transition-colors duration-200"
        onClick={() => router.back()}
      >
        <IoMdArrowRoundBack />
      </div>
    </div>
  );
}

export default BackButton;
