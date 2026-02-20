import Image from "next/image";
import Link from "next/link";
import React from "react";

function ImageCard({ name, title }) {
  return (
    <Link
      href={`/adds?category=${name}`}
      className="flex flex-col items-center gap-4 mt-20 bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 rounded-2xl border border-blue-400/30 hover:border-blue-300 hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-300 hover:scale-105 group cursor-pointer"
    >
      <Image
        className="rounded-lg group-hover:shadow-lg transition-shadow"
        src={`/images/${name}.png`}
        width={200}
        height={150}
        priority={true}
      />
      <span className="text-xl font-semibold text-blue-100 group-hover:text-blue-50 transition-colors">
        {title}
      </span>
    </Link>
  );
}

export default ImageCard;
