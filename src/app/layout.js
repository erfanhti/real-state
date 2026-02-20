import { yekan } from "@/utils/fonts";
import "./globals.css";
import Layout from "@/layout/Layout";
import { Toaster } from "react-hot-toast";
import NextAuthProvider from "@/providers/NextAuthProvider";

export const metadata = {
  title: "پروژه مشاور املاک",
  description: "وبسایت انتشار آگهی های مشاور املاک | توسعه داده شده با nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
