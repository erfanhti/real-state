import Advertisement from "@/models/Advertisement";
import Details from "@/modules/Details";
import connectDB from "@/utils/connectDB";

async function page({ params }) {
  const id = params.advertisementId[0];
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    toast.error("مشکلی در سمت سرور رخ داده است!");
  }
  const advertisement = await Advertisement.findOne({ _id: id });

  return (
    <div className="py-4">
      <Details data={advertisement} />
    </div>
  );
}

export default page;

//نشان دادن متا دیتا ها به صورت داینامیک

export async function generateMetadata({ params }) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    toast.error("مشکلی در سمت سرور رخ داده است!");
  }
  const id = params.advertisementId[0];
  const advertisement = await Advertisement.findOne({ _id: id });

  return {
    title: advertisement.title,
    description: advertisement.description,
    other: { realState: advertisement.realState }, //متاتگ دلخواه
  };
}
