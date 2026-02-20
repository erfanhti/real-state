import ImageCard from "@/modules/ImageCard";
import {
  FaCity,
  FaHome,
  FaHandshake,
  FaKey,
  FaFileContract,
} from "react-icons/fa";

function HomePage() {
  const services = [
    { name: "خرید", icon: FaHome },
    { name: "فروش", icon: FaFileContract },
    { name: "رهن", icon: FaHandshake },
    { name: "اجاره", icon: FaKey },
  ];
  const cities = [
    "تهران",
    "سنندج",
    "کرمانشاه",
    "اهواز",
    "مشهد",
    "اصفهان",
    "شیراز",
    "خرم آباد",
  ];
  const categories = {
    apartment: "آپارتمان",
    villa: "ویلا",
    store: "مغازه",
    field: "زمین",
  };

  return (
    <div className="text-white/90 ">
      <div className="min-h-screen flex flex-col">
        {/* عنوان اصلی */}
        <h1 className="text-6xl md:text-7xl text-center font-[500] mt-20 mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          سامانه آنلاین فروش املاک
        </h1>
        <p className="text-center text-gray-400 text-lg mb-20">
          بهترین پلتفرم برای خرید، فروش و اجاره ملک
        </p>

        {/* بخش سرویس‌ها */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 px-4 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-8 bg-gradient-to-br from-blue-500/15 to-cyan-500/15 rounded-2xl border border-blue-400/30 hover:border-blue-300 hover:from-blue-500/25 hover:to-cyan-500/25 transition-all duration-300 hover:scale-105 cursor-pointer group w-40"
              >
                <IconComponent className="text-5xl text-blue-400 group-hover:text-cyan-300 transition-colors" />
                <span className="text-xl font-[600]">{service.name}</span>
              </div>
            );
          })}
        </div>

        {/* بخش دسته‌بندی‌ها */}
        <div className="px-4 mb-16">
          <h2 className="text-4xl font-[500] text-center mb-12">
            دسته‌بندی‌های محبوب
          </h2>
          <div className="flex justify-center gap-6 flex-wrap">
            {Object.keys(categories).map((i) => (
              <ImageCard
                title={categories[i]}
                alt={categories[i]}
                name={i}
                key={i}
              />
            ))}
          </div>
        </div>

        {/* بخش شهرهای محبوب */}
        <div className="mt-10 px-4 pb-20">
          <h3 className="text-4xl font-[500] mb-12 text-center">
            شهر های پر بازدید
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {cities.map((i) => (
              <li
                key={i}
                className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl border border-blue-400/30 hover:border-blue-300 hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-300 cursor-pointer group hover:scale-105"
              >
                <FaCity className="text-3xl mb-3 text-blue-300 group-hover:text-blue-200 transition-colors" />
                <span className="text-center font-semibold text-lg">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
