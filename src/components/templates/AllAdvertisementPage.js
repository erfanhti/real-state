import Card from "@/modules/Card";
import AddsSidebar from "@/modules/AddsSidebar";

function AllAdvertisementPage({ data, searchParams }) {
  return (
    <div className="flex gap-6 py-4">
      <AddsSidebar searchParams={searchParams} />
      <div className="w-4/5 grid grid-cols-3 gap-6 h-fit">
        {data.length === 0 && (
          <h2 className=" text-2xl">هنوز هیچ آگهی ثبت نشده است !</h2>
        )}
        {data?.map((item) => (
          <div
            key={item._id}
            className="bg-white/10 rounded-2xl p-4 shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 text-lg"
          >
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllAdvertisementPage;
