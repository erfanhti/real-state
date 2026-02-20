"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { TbLogin2 } from "react-icons/tb";
import { FaUser } from "react-icons/fa";

function Header() {
  const { status } = useSession();

  return (
    <header className="bg-blue-950 rounded-2xl py-6 px-4 flex justify-between items-center text-xl">
      <div>
        <ul className="flex gap-6">
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/adds">آگهی ها</Link>
          </li>
        </ul>
      </div>
      {status === "unauthenticated" ? (
        <div className="bg-white/90 font-[400] text-blue-950 p-1 rounded-lg">
          <Link href="/signin" className="flex gap-1 items-center">
            <TbLogin2 />
            <span className="font-[400]">ورود</span>
          </Link>
        </div>
      ) : (
        <div className="bg-white/90 text-blue-950 p-1 rounded-lg">
          <Link href="/dashboard" className="flex gap-1 items-center">
            <FaUser />
            <span className="font-[400]">پنل کاربری</span>
          </Link>
        </div>
      )}
      {/* {status === "authenticated" && (
        <button className="bg-red-400" onClick={() => signOut()}>
          خروج
        </button>
      )} */}
    </header>
  );
}

export default Header;
