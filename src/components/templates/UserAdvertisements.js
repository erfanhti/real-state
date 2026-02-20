import DashboardCard from "@/modules/DashboardCard";

function UserAdvertisements({ advertisements }) {
  return (
    <div className="w-full">
      {advertisements.length === 0 && (
        <p className="bg-red-400/80 w-fit p-4 rounded-xl text-center text-2xl mx-auto mt-4">
          شما هنوز آگهی منتشر نکرده اید !{" "}
        </p>
      )}
      <div className="grid grid-cols-2 gap-4">
        {advertisements?.map((item) => (
          <DashboardCard
            key={item._id}
            item={JSON.parse(JSON.stringify(item))}
          />
        ))}
      </div>
    </div>
  );
}

export default UserAdvertisements;
