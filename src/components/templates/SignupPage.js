"use client";

import api from "@/utils/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

function SignupPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await api.post("/auth/signup", form);
      if (res.status === 201) toast.success(res.data.message);
      setForm({ email: "", password: "" });
      setLoading(false);
      setTimeout(() => router.push("/signin"), 1500);
    } catch (error) {
      setLoading(false);
      if (error.status === 422 || error.status === 500)
        toast.error(error.data.error);
    }
  };

  return (
    <div className="h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-10 flex flex-col items-center">
        <h1 className="text-4xl font-[400] text-white mb-8 tracking-tight drop-shadow-lg">
          ثبت نام
        </h1>
        <form className="w-full flex flex-col gap-6" onSubmit={submitHandler}>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-white text-right pr-2 text-lg font-medium"
            >
              ایمیل
            </label>
            <input
              className="p-3 rounded-lg bg-white/80 text-slate-800 text-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              type="text"
              name="email"
              id="email"
              placeholder="ایمیل خود را وارد کنید"
              value={form.email}
              onChange={changeHandler}
              autoComplete="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-white text-right pr-2 text-lg font-medium"
            >
              رمز عبور
            </label>
            <input
              className="p-3 rounded-lg bg-white/80 text-slate-800 text-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              type="password"
              name="password"
              id="password"
              placeholder="رمز عبور خود را وارد کنید"
              value={form.password}
              onChange={changeHandler}
              autoComplete="new-password"
            />
          </div>
          {loading ? (
            <div className="flex justify-center">
              <ThreeDots
                visible={true}
                height="70"
                width="70"
                color="#fbbf24"
              />
            </div>
          ) : (
            <button
              className="w-full bg-amber-400 hover:bg-amber-500 transition text-slate-900 text-xl font-[400] py-3 rounded-lg shadow-lg mt-2"
              type="submit"
            >
              ثبت نام
            </button>
          )}
        </form>
        <p className="text-white mt-8 text-center">
          قبلا ثبت نام کرده‌اید؟{" "}
          <Link
            className="text-amber-300 underline hover:text-amber-400 transition"
            href="/signin"
          >
            ورود
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
