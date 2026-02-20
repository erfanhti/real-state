import Advertisement from "@/models/Advertisement";
import AllAdvertisementPage from "@/templates/AllAdvertisementPage";
import connectDB from "@/utils/connectDB";
import toast from "react-hot-toast";

async function Advertisements({ searchParams }) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    toast.error("مشکلی در سمت سرور رخ داده است!");
  }

  const data = await Advertisement.find({ published: true }).select("-userId");
  let filteredData = data;

  if (searchParams.category) {
    filteredData = data.filter(
      (item) => item.category === searchParams.category,
    );
  }
  return (
    <div>
      <AllAdvertisementPage
        data={JSON.parse(JSON.stringify(filteredData))}
        searchParams={searchParams.category || "all"}
      />
    </div>
  );
}

export default Advertisements;

