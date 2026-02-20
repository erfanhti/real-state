import Card from "@/modules/Card";

function AdminPage({ data }) {
  return (
    <>
      {data.length === 0 && (
        <p className="bg-red-400/80 w-fit p-4 rounded-xl text-center text-2xl mx-auto mt-4">
          هیچ آگهی جدیدی برای تایید شدن وجود ندارد .
        </p>
      )}
      <div className="grid grid-cols-3 gap-4 h-fit">
        {data?.map((i) => (
          <div
            key={i._id}
            className="bg-white/10 rounded-2xl p-4 shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 text-lg"
          >
            <Card item={i} publishCard={true} />
          </div>
        ))}
      </div>
    </>
  );
}

export default AdminPage;
