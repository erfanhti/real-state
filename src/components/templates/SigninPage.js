"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

function SigninPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    setLoading(true);
    const res = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });
    setForm({ email: "", password: "" });
    setLoading(false);
    if (!res.error) {
      toast.success("ورود با موفقیت انجام شد!");
      setTimeout(() => router.push("/"), 1500);
    }
    if (res.error) toast.error(res.error);
    setLoading(false);
  };

  return (
    <div className="h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-10 flex flex-col items-center">
        <h1 className="text-4xl font-[400] text-white mb-8 tracking-tight drop-shadow-lg">
          ورود
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
              // autoComplete="email"
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
              // autoComplete="new-password"
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
              disabled={loading}
              className="w-full bg-amber-400 hover:bg-amber-500 transition text-slate-900 text-xl font-[400] py-3 rounded-lg shadow-lg mt-2"
              onClick={submitHandler}
              type="submit"
            >
              ورود
            </button>
          )}
        </form>
        <p className="text-white mt-8 text-center">
          ثبت نام نکرده‌اید؟
          <Link
            className="text-amber-300 underline hover:text-amber-400 transition"
            href="/signup"
          >
            ثبت نام
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SigninPage;
