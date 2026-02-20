import Advertisement from "@/models/Advertisement";
import AddAdvertisementPage from "@/templates/AddAdvertisementPage";

async function Edit({ params }) {
  const id = params.edit[1];
  const advertisement = await Advertisement.findOne({ _id: id });
  return (
    <div>
      <AddAdvertisementPage
        advertisement={JSON.parse(JSON.stringify(advertisement))}
      />
    </div>
  );
}

export default Edit;
