"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { FaSignOutAlt, FaUser } from "react-icons/fa";

function DashboardSidebar({ children, createdAt, email, role }) {
  return (
    <div className="flex gap-3 py-4">
      <div className="w-1/4 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-4 flex flex-col text-xl">
        <div className="text-center flex flex-col gap-3">
          <FaUser className="border-2 p-3 text-6xl rounded-full mx-auto" />
          <div
            className={`flex ${role === "ADMIN" ? "justify-between" : "justify-center"} text-lg`}
          >
            {role === "ADMIN" && <span className="text-amber-500">ادمین</span>}
            <span>{email}</span>
          </div>
          <hr />
        </div>
        <div className="mt-4">
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/dashboard">حساب کاربری</Link>
            </li>
            <li>
              <Link href="/dashboard/myadvertisements">آگهی های من</Link>
            </li>
            <li>
              <Link href="/dashboard/add">ثبت آگهی</Link>
            </li>
            {role === "ADMIN" && (
              <li>
                <Link href="/dashboard/admin">در انتظار تایید</Link>
              </li>
            )}
          </ul>
          <span
            className="flex items-center gap-2 text-red-500 mt-3 cursor-pointer"
            onClick={() => signOut()}
          >
            <FaSignOutAlt />
            خروج
          </span>
        </div>
        <div className="flex gap-2 text-lg text-white bg-blue-300/30 px-2 py-1 rounded-md w-fit mt-16 ">
          <p className="font-[400]">تاریخ ثبت نام : </p>
          <p>{new Date(createdAt).toLocaleDateString("fa-IR")}</p>
        </div>
      </div>
      <div className="w-3/4 ">{children}</div>
    </div>
  );
}

export default DashboardSidebar;
